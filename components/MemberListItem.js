import React from 'react';

const MemberListItem = ({
  name, position, avatar, description, links,
}) => (
  <div className="member">
    {avatar && (
    <img alt={name} src={avatar.thumbnail} />
    )}
    <div className="name">
      {name}
    </div>
    <div className="position">
      {position}
    </div>
    <div className="description">
      {description}
    </div>
    {links.map(({ _id: linkId, name: linkName, url: linkUrl }) => (
      <div className="link" key={linkId}>
        <a href={linkUrl}>
          {linkName}
        </a>
      </div>
    ))}
    <style jsx>
      {`
        .link {
          margin-bottom: .5em
        }
        .name,
        .position {
          font-weight: bold;
        }
        .name {
          font-size: 1.25em;
          margin-top: .5em;
        }
        .description {
          margin-top: 1em;
          margin-bottom: 1.5em;
          margin-left: .75em;
        }
        .member {
          display: block;
          margin-bottom: 7rem;
        }
        .member img {
          width: 61%;
          border-bottom: 1em solid #17fac5;
          margin-bottom: -2em;
          margin-left: 1.5em;
          border-radius: .5em;
        }
        @media (max-width: 767px) {
          .member {
            margin-top: 1.5em;
          }
        }
        @media (min-width: 768px) {
          .member {
            width: 48%;
          }
        }
      `}
    </style>
  </div>
);

export default MemberListItem;
