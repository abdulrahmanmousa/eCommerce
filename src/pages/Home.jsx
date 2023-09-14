import Slider from "../components/Slider";
import "./Home.scss";
import FeaturedProducts from "../components/FeaturedProducts";
import axios from "axios";

export default function Home() {
  const bodyData = {
    assigneeType: "UNASSIGNED",
    description: "Cloud migration initiativ fdsjlfksldfjslfde",
    key: "SA",
    leadAccountId: "70121:e787a46b-7b95-4e04-a685-4501729a0622",
    name: "reqportal2ss",
    projectTypeKey: "software",
    url: "http://wecodeforyou.io",
  };

  axios
    .post(
      "https://abdulrahmanmousa.atlassian.net/rest/api/3/project/",
      bodyData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic YWJkb21vdXNhMjAxMDIwMTFAZ21haWwuY29tOkFUQVRUM3hGZkdGMFVUd3IyYnR4UUtTVWNtNlZVZThfMk1QNnBOcU5uZVl4TVJGQ0tHZVF3a1JsTGFjTUdEeEItLWg3V0g3NThRODUxYzBIU0xmSkpUdlkwdDEzRW5zSml0eEkyeUUzLVllU052Z3JoTGFsWERWY2Q4WjZhMjFwdE93bjRnMnlGaVZ4enc3RC1oQXJNejVOaHZvRGQ5X2lDSktuNkRzLTF6QkpIVENoblhmYlE4dz0wQTU1OTY5Rg==",
        },
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <Slider />
      <FeaturedProducts />
    </>
  );
}
