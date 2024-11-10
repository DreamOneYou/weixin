// index.js
Page({
  data: {
    inputText: '',
    imageUrl: '',
    isLoading: false
  },

  handleInput(e) {
    this.setData({
      inputText: e.detail.value
    })
  },

  async handleSubmit() {
    if (!this.data.inputText.trim()) {
      wx.showToast({
        title: '请输入文字',
        icon: 'none'
      })
      return
    }

    this.setData({ isLoading: true })

    try {
      // TODO: 调用 coze API 获取图片 URL
      // const response = await wx.request({
      //   url: 'YOUR_COZE_API_ENDPOINT',
      //   method: 'POST',
      //   data: {
      //     text: this.data.inputText
      //   }
      // })
      
      // this.setData({
      //   imageUrl: response.data.url
      // })
      
      // 临时使用示例图片
      this.setData({
        imageUrl: 'https://example.com/placeholder.jpg'
      })
    } catch (error) {
      wx.showToast({
        title: '生成失败，请重试',
        icon: 'none'
      })
    } finally {
      this.setData({ isLoading: false })
    }
  },

  previewImage() {
    if (this.data.imageUrl) {
      wx.previewImage({
        urls: [this.data.imageUrl]
      })
    }
  }
})
