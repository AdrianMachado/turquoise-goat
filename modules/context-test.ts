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
  ContextData.set(context, "my-data", { hello: "world" });
  return request;
}
