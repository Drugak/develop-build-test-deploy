/*
 * Deployment configuration
 *
\* ================== */

module.exports = {
  ftp: {
    host: 'host.name',
    port: 21,
    authKey: 'server-ftp' // Auth credentials stored in .ftppass
  },
  sftp: {
    host: 'host.name',
    port: 22,
    authKey: 'server-sftp' // Auth credentials stored in .ftppass
  },
  ssh: {
    host: 'host.name',
    port: 22,
    username: 'username',
    password: 'password', // Auth with password
    passphrase: 'passphrase' // Auth with private key
  }
};
