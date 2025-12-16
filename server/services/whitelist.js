export default ({strapi}) => ({
  async getUsers() {
    const query = strapi.query('plugin::strapi-plugin-sso.whitelists')
    return await query.findMany()
  },
  async registerUser(email) {
    const normalized = email?.toLowerCase?.() || email
    const query = strapi.query('plugin::strapi-plugin-sso.whitelists')
    await query.create({
      data: {
        email: normalized
      }
    })
  },
  async removeUser(id) {
    const query = strapi.query('plugin::strapi-plugin-sso.whitelists')
    await query.delete({
      where: {
        id
      }
    })
  },
  async checkWhitelistForEmail(email) {
    const config = strapi.config.get('plugin::strapi-plugin-sso');
    const useWhitelist = config['USE_WHITELIST'] === true;
    if (!useWhitelist) {
      // If whitelist is disabled, set to true and skip
      return;
    }
    const normalized = email?.toLowerCase?.() || email
    const emailsToCheck = [normalized]
    if (email && normalized !== email) {
      emailsToCheck.push(email)
    }
    const query = strapi.query('plugin::strapi-plugin-sso.whitelists')
    const result = await query.findOne({
      where: {
        $or: emailsToCheck.map((value) => ({email: value}))
      }
    })
    if (result === null) {
      throw new Error('Not present in whitelist')
    }
  }
})
