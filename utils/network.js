export default function request(options) {
  return new Promise((resolvet, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: (res) => {
        resolvet(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}