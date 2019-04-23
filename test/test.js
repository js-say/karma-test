describe('jQuery', function () {
  it('should have jQuery', function () {
    if (!window.jQuery) {
      throw new Error('查看下 karma.conf.js 配置项 files 是否正确')
    }
  })

  it('should able to get a body', function () {
    var $body = $('body')
    $body.length.should.equal(1)
    $body[0].should.equal(document.getElementsByTagName('body')[0])
  })

  it('should able to request http://code.jquery.com/jquery-2.1.1.min.js',  function (done) {
    // 使用 jQuery.ajax 请求 http://code.jquery.com/jquery-2.1.1.min.js，并验证是否拿到文件
    jQuery.ajax({
      url: 'http://code.jquery.com/jquery-2.1.1.min.js',
      success: function(res){
        res.should.be.String()
        done()
      },fail: function(error){
        return done(err);
      }
    })
  })
})