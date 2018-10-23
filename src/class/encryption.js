import crypto from 'crypto'
export default class Encryption {
  static access_token (token) {
    let ticks = Date.now()
    return {
      c: getmd5(ticks + token + window.md5key),
      t: `/Date(${ticks})/`,
      token: token
    }
  }
  static getmd5 (hexData) {
    let md5 = crypto.createHash('md5')
    md5.update(hexData)
    let hex = md5.digest('hex')
    console.log(hex)
    //47bce5c74f589f4867dbd57e9ca9f808
  } 
}
