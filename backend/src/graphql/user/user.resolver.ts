import { ContextInterface } from "../context";

const Query = {
  users: async (
    _: any,
    __: any,
    { keycloak }: ContextInterface,
  ): Promise<any> => {
    return await keycloak.getAllUsers();
  },
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

const Mutation = {
  //Add a new user
  createUser: async (
    _: any,
    { input }: { input: any },
    { keycloak }: ContextInterface,
  ): Promise<any> => {
    const { password, ...data } = input;
    const newUser = await keycloak.addUser({ ...data, enabled: true });
    await keycloak.resetPassword(newUser.id, password);
    console.log(newUser);
    return newUser;
  },

  // Update an existing usrt by ID
  updateUser: async (
    _: any,
    { id, input }: { id: string; input: any },
    { keycloak }: ContextInterface,
  ): Promise<any> => {
    const existingUser = await keycloak.getUserData(id);

    if (!existingUser) {
      throw new Error(`User with ID ${id} does not exist`);
    }
    const newProfile = Object.assign({}, existingUser, input);
    const newInput = Object.assign({}, newProfile, {
      attributes: Object.assign({}, existingUser.attributes, input.attributes),
    });

    await keycloak.editUser(id, newInput);
    return await keycloak.getUserData(id);
  },

  // Soft delete a user by ID
  deleteUser: async (
    _: any,
    { id }: { id: string },
    { keycloak }: ContextInterface,
  ): Promise<any> => {
    const existingUser = await keycloak.getUserData(id);

    if (!existingUser) {
      throw new Error(`User with ID ${id} does not exist`);
    }

    await keycloak.editUser(id, { enabled: false });
    return await keycloak.getUserData(id);
  },

  // Hard delete a user by ID
  hardDelUser: async (
    _: any,
    { id }: { id: string },
    { keycloak }: ContextInterface,
  ): Promise<any> => {
    const existingUser = await keycloak.getUserData(id);

    if (!existingUser) {
      throw new Error(`User with ID ${id} does not exist`);
    }

    await keycloak.hardDelUser(id);
    return await keycloak.getUserData(id);
  },
};
export default { Query, Mutation, User };
