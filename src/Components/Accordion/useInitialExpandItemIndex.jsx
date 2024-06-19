import { useState, useEffect, Children } from "react";

function useInitialExpandItemIndex(renderFunction) {
  const [expandedIndex, setExpandedIndex] = useState([]);

  useEffect(() => {
    const {
      props: { children },
    } = renderFunction({});

    let initialExpandedIndexArray = [];
    Children.forEach(children, ({ props: { expanded, id } }) => {
      if (expanded) {
        console.log("expanded", expanded);
        console.log("id", id);

        initialExpandedIndexArray.push(id);
      }
    });

    setExpandedIndex(initialExpandedIndexArray);
  }, [renderFunction]);

  return expandedIndex;
}

export default useInitialExpandItemIndex;
