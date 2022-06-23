export const getVideos = async (options, prisma) => {
  const data = {
    where: {},
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    include: {
      author: true,
    },
  };

  if (options.author) {
    data.where = {
      author: {
        id: options.author,
      },
    };
  }

  if (options.take) data.take = options.take;
  if (options.skip) data.skip = options.skip;
  const videos = await prisma.video.findMany(data);

  return videos;
};

export const getVideo = async (id, prisma) => {
  const video = await prisma.video.findUnique({
    where: {
      id,
    },
    include: {
      author: true,
    },
  });
  return video;
};

export const getUser = async (username, prisma) => {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  return user;
};