// import { User } from "@prisma/client";
// import { ContextInterface } from "../context";

import { ContextInterface } from "../context";

const Query = {
  user: async (
    _: any,
    {
      id,
    }: {
      id: string;
    },
    { keycloak }: ContextInterface,
  ): Promise<any> => {
    const userData = await keycloak.getUserData(id);
    console.log("userData", userData);
    return userData;
  },
  authUser: async (
    _: any,
    __: any,
    { keycloak, authUser }: ContextInterface,
  ): Promise<any> => {
    const userData = await keycloak.getUserData(authUser.sub);
    return userData;
  },
  helloWord: async (): Promise<string> => {
    return "Hello Word";
  },
};

const User = {
  imgUrl: (parent: any) =>
    parent.attributes?.avatarUrl?.[0] ||
    "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
  companyId: (parent: any) => parent.attributes?.companyId?.[0],
};

const Mutation = {};
export default { Query, Mutation, User };
