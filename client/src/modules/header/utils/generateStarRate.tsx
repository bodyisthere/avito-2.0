export const generateStarRate = (rate: number, reviewsList: string[]) => {
  const rounded = Math.round(rate);
  const result: any[] = [];
  for(let i = 0; i < rounded; i++) {
    result.push(<i className="fa-solid fa-star"></i>);
  }
  if(!reviewsList.length) {
    return result;
  } else {
    return <p>321</p>;
  }
};