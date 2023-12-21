import { ContextData, ZuploContext, ZuploRequest } from "@zuplo/runtime";

export async function policy1(request: ZuploRequest, context: ZuploContext) {
  ContextData.set(context, "my-data", { hello: "world" });
  return request;
}

export async function policy2(request: ZuploRequest, context: ZuploContext) {
  const data = ContextData.get(context, "my-data");
  if (!data) {
    throw new Error("No data");
  }
  data.foo = "baz";
  ContextData.set(context, "my-data", data);
  return request;
}

export async function handler(request: ZuploRequest, context: ZuploContext) {
  const data = ContextData.get(context, "my-data");
  return data;
}

const myData = new ContextData<{ hello?: string; foo?: string }>("my-data");

export async function policy_class1(
  request: ZuploRequest,
  context: ZuploContext
) {
  myData.set(context, { hello: "world" });
  return request;
}

export async function policy_class2(
  request: ZuploRequest,
  context: ZuploContext
) {
  const data = myData.get(context);
  if (!data) {
    throw new Error("No data");
  }
  data.foo = "baz";
  myData.set(context, data);
  return request;
}

export async function handler_class(
  request: ZuploRequest,
  context: ZuploContext
) {
  const data = myData.get(context);
  return data;
}
