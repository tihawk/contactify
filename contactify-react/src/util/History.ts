const History = {
  navigate: (page: any, ...rest: any) => {},
  push: (page: any, ...rest: any) => History.navigate(page, ...rest),
};

export default History;