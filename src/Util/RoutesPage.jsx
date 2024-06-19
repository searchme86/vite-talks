import { useRoutes } from "react-router-dom";
import FileContainer from "../Components/Files/FileContainer";
import Entry from "../Pages/Entry";
import Talk from "../Pages/Talk/Talk";
import TaxTalk from "../Pages/Talk/TaxTalk/TaxTalk";
import People from "./../Pages/People/People";

function RoutesPage() {
  const routesPages = useRoutes([
    { path: "/", element: <Entry /> },
    {
      path: "/talk",
      element: <Talk />,
      children: [
        {
          path: "taxTalk",
          element: <TaxTalk />,
          children: [
            { path: "file", element: <FileContainer /> },
            { path: "member", element: <People /> },
          ],
        },
      ],
    },
  ]);
  return routesPages;
}

export default RoutesPage;
