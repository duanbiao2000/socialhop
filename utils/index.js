export const getFileTypeFromUrl = (url) => {
  // 如果URL为空,返回"unknown"
  if (url === null || url === undefined) return "unknown";

  // 获取URL的文件扩展名
  const extension = url.split(".").pop();

  // 根据扩展名判断文件类型
  switch (extension) {
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
      return "image";
    case "mp4":
    case "avi":
    case "mov":
      return "video";
    default:
      return "unknown";
  }
};

export const updateQueryCacheLikes = (
  postLikes,
  postId,
  userId,
  actionType
) => {
  if (actionType === "like") {
    // 如果是点赞,添加新的点赞记录
    return [...postLikes, { authorId: userId, postId }];
  } else {
    // 如果是取消点赞,移除该用户的点赞记录
    return postLikes.filter((like) => like.authorId !== userId);
  }
};

export const checkPostForTrends = (postText = "") => {
  // 将帖子文本分割成单词,并筛选出以#开头的单词
  const firstSplit = postText
    .trim()
    .split(/\s+/)
    .filter((word) => word.startsWith("#"))
    .map((word) => word.toLowerCase());
  
  let res = firstSplit;
  
  // 检查是否有包含多个#的单词,如果有,进行进一步分割
  firstSplit.map((word) => {
    const secondSplit = word.split("#");
    if (secondSplit.length > 1) {
      res = [...res, ...secondSplit.slice(1, secondSplit.length)].filter(
        (el) => el !== word
      );
    }
  });
  
  // 去除重复的话题标签
  res = [...new Set(res)];
  return res;
};
