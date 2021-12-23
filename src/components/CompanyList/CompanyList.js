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
  }, [company]);

  function handelAdd(registryCode) {
    API.fetchAddMyCompany(registryCode).then((data) => {
      const res = company;

      res.forEach((el) => {
        if (el.registryCode === data.registryCode) {
          el.id = data.id;
          setCompany(res);
        }
      });
      // console.log(f);
    });
  }

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
                  onClick={() => handelAdd(el.registryCode)}
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
