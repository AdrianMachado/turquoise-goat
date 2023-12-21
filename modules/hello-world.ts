import { ContextData, ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  ContextData.set(context, "foo", "bar");
  const foo = ContextData.get(context, "foo");

  context.log.info(`Foo is ${foo}`);
  return "What zup?";
}
