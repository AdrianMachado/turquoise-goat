import { ContextData, ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  const data = ContextData.get(context, "my-data");
  context.log.error(`Data ${data}`);
  return data;
}
