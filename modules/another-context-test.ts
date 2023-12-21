import { ContextData, ZuploContext, ZuploRequest } from "@zuplo/runtime";

type MyPolicyOptionsType = {
  myOption: any;
};
export default async function (
  request: ZuploRequest,
  context: ZuploContext,
  options: MyPolicyOptionsType,
  policyName: string
) {
  const data = ContextData.get(context, "my-data");
  if (!data) {
    throw new Error("No data");
  }
  data.foo = "baz";
  ContextData.set(context, "my-data", data);
  return request;
}
