import React from "react";
import { useState, useEffect } from "react";
import API from "../../service";

import s from "./CompanyList.module.css";

const CompanyList = () => {
  const [company, setCompany] = useState(null);
  useEffect(() => {
    API.fetchCompany()
      .then((data) => {
        setCompany(data);
      })
      .catch((error) => console.warn(error));
  });

  return (
    <>
      {company && (
        <ul className={s.companyList}>
          {company.map((el) => (
            <li
              className={el.id === null ? s.companyItem : s.companyItemMy}
              key={el.name}
            >
              <h2 className={s.companyItemTitle}>{el.name}</h2>
              <p className={s.companyItemReg}>Reg.nr: {el.registryCode}</p>
              {el.id === null && (
                <button
                  className={s.companyItemButton}
                  onClick={() => API.fetchAddMyCompany(el.registryCode)}
                  type="button"
                >
                  ADD TO SYSTEM
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CompanyList;
