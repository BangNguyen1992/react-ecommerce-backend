const Mutation = {
  // TODO: Need to check if user logged in

  createItem(parent, args, context, info) {
    return context.db.mutation.createItem(
      {
        data: { ...args }
      },
      info
    );
  }
};

module.exports = Mutation;
