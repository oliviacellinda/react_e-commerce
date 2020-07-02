import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

/**
 * The export expression above is using High-Order Component by putting MenuItem Component inside withRouter.
 * This is done so we can use Route property from App.js.
 *
 * As shown in code fragment inside App.js, we can use Route object of the assigned component.
 * Unfortunately, we can only use those object inside the said component and in order to use it inside child property,
 * we need to pass it as child's property when we use the child component.
 * In this example we need to use the Route object only in menu-item component, not in the directory component.
 * It is considered as bad practice to pass unused property to the child component (prop drilling).
 *
 * To avoid that, we can use High-Order Component (HOC) as shown in the above expression.
 * By doing this, we can now use React object that is passed from App.js without explicitly pass it as property
 * in the directory component.
 */
