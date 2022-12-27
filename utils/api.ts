export async function GetAllBlogs() {
  const result = await fetch("https://sahajghatiyablogs.vercel.app/api/blogs");
  const resultjson = await result.json();
  const resultdata = resultjson.data;
  return resultdata;
}
export async function GetRecentBlogs() {
  const result = await fetch("https://sahajghatiyablogs.vercel.app/api/blogs/recent");
  const resultjson = await result.json();
  const resultdata = resultjson.data;
  return resultdata;
}

export async function GetTopWeeklyBlogs() {
  const resultblogs = await fetch(
    "https://sahajghatiyablogs.vercel.app/api/blogs/topweekly"
  );
  const resultblogsjson = await resultblogs.json();
  const resultblogsdata = resultblogsjson.data;
  return resultblogsdata;
}

export async function GetBlogsByViews() {
  const result = await fetch(
    "https://sahajghatiyablogs.vercel.app/api/blogs/views"
  );
  const resultjson = await result.json();
  const resultdata = resultjson.data;
  return resultdata;
}

export async function GetBlogsByLikes() {
  const result = await fetch(
    "https://sahajghatiyablogs.vercel.app/api/blogs/likes"
  );
  const resultjson = await result.json();
  const resultdata = resultjson.data;
  return resultdata;
}

export async function GetBlogsByCategory(category: string) {
  const result = await fetch(
    `https://sahajghatiyablogs.vercel.app/api/blogs/${category}`
  );
  const resultjson = await result.json();
  const resultdata = resultjson.data;
  return resultdata;
}

export async function GetBlogData(category: string, blogslug: string) {
  const result = await fetch(
    `https://sahajghatiyablogs.vercel.app/api/blogs/${category}/${blogslug}`
  );
  const resultjson = await result.json();
  const resultdata = resultjson.data;
  return resultdata;
}

export async function GetPositiveThoughts() {
  const result = await fetch(
    `https://sahajghatiyablogs.vercel.app/api/positivethoughts`
  );
  const resultjson = await result.json();
  const resultdata = resultjson.data;
  return resultdata;
}
