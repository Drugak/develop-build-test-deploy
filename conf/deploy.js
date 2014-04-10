/*
 * Deploy configuration
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
  }
};
