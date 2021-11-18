import React from "react";
import { SearchFieldPropsI } from "../../../Types";
import Button from "../../Button/Button";

import IconSearch from "../../../public/img/icon-search.svg";

import styles from "./SearchField.module.scss";

const SearchFiled: React.FC<SearchFieldPropsI> = (props: SearchFieldPropsI) => {
  return (
    <div className={styles.searchFiled}>
      <div className={styles.searchFiled__input_area}>
        <div className={styles.searchFiled__input_box}>
          <IconSearch />
          <input
            className={styles.searchFiled__input_filed}
            type="text"
            placeholder="Vyhledat"
            onChange={(e) => props.onChange(e)}
          />
        </div>
      </div>
      <div className={styles.searchFiled__button_area}>
        <Button onClick={() => {}} design="fill" text="VYHLEDAT" />
      </div>
    </div>
  );
};

export default SearchFiled;
