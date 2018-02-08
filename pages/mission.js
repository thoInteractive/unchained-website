import React from 'react';
import { compose, pure } from 'recompose';
import connectApollo from '../lib/hoc/connectApollo';
import withRegion from '../lib/hoc/withRegion';
import connectI18n from '../lib/hoc/connectI18n';
import PageLayout from '../components/PageLayout';

const Support = ({ mission }) => (
  <PageLayout title={mission.meta_title} metaDescription={mission.meta_description}>

    <div className="wrap wrap--narrow mt3">
      <section id="mission" className="section">
        <h2>{mission.title}</h2>
      </section>

    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('mission'),
  pure,
)(Support));
