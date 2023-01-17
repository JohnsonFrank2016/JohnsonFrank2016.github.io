// 日期控制在 TimeLine() Function

function test() {
  document.write("");
}

function blog_footer() {
  document.write(
    '<p>\
      有問題嗎？立即聯絡我：\
      <a href="mailto:johnsonwu977@gmail.com">Email</a>\
      或是\
      <a href="https://www.facebook.com/profile.php?id=100027498210056">Facebook</a></p>\
      <p>\
        <a href="#">Back to top\
      </a>\
    </p>');
}

function container(str) {
  document.write('<div class="container">\
    <p></p>\
    <header class="p-2 rounded text-bg-dark">\
      <div class="p-4 p-md mb text-bg-dark">\
        <div class="col-md px-0 text-center">\
          <h1 class="fst-italic">'+ str + '</h1>\
        </div>\
      </div>\
    </header>\
    <div class="nav-scroller py-1 mb-2">\
      <nav class="nav d-flex justify-content-between">\
        <a class="p-2 link-secondary" href="index.html">動態消息</a>\
        <a class="p-2 link-secondary" href="Article_list.html">文章列表</a>\
        <a class="p-2 link-secondary" href="#">艾瑞克實習</a>\
        <a class="p-2 link-secondary" href="Update.html">網站更新消息</a>\
      </nav>\
    </div>\
    <hr>\
  </div>\
  ');
}

function blog_pagination() {
  document.write('<nav class="blog-pagination" aria-label="Pagination">\
<a class="btn btn-outline-primary rounded-pill" href="index.html">回首頁</a> \
<a class="btn btn-outline-secondary rounded-pill" onClick="window.location.reload();">重新整理</a>\
</nav>');
}

function TimeLine() {
  let date_array = [
    'January_2023'
  ];
  // document.write(array_str.length);
  document.write('<div class="p-4"><h4 class="fst-italic">Archives</h4>\
  <ol class="list-unstyled mb-0">');
  for (let x in date_array) {
    document.writeln('<li><a href="#' + date_array[x] + '">' + date_array[x].replace("_", " ") + '</a></li>');
  }
  document.write('</ol></div>');
}