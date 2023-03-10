import { useLocation } from 'react-router-dom';

export default function Contact() {
  const queryString = useLocation().search;
  console.log(queryString);

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get('name');

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt
        ipsam fugiat nesciunt dolores nihil architecto possimus voluptatum enim
        earum similique eveniet illum laudantium quod, impedit modi numquam
        dolorum consequatur!
      </p>
    </div>
  );
}
