import React from 'react';
import { translate } from 'react-i18next';

import * as deps from '../../deps';

import ads from '../../assets/Publi.png';
import analytics from '../../assets/Analytics.png';
import push from '../../assets/Push.png';
import rate from '../../assets/Rate.png';

const ComingSoon = () => (
  <div className="colums">
    <div className="column is-5 is-12-mobile is-half-tablet is-paddingless" >
      <article className="message is-primary">
        <div className="message-header">
          <p>Coming soon</p>
        </div>
        <div className="message-body">
          Extensions are under development, we will notify you upon release.
        </div>
      </article>
    </div>
  </div>
);

let Content = ({ t }) => (
  <div className="columns is-multiline">
    <div className="column is-5 is-12-mobile is-half-tablet">
      <div className="card is-fullwidth">
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column is-3">
              <img src={push} alt="Push Notifications icon" />
            </div>
            <div className="column is-9">
              <div className="content">
                <h2>Push Notifications</h2>
                <p>
                  {t('push-notifications-description')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <span className=" card-footer-item"><strong><small>Coming soon</small></strong></span>
        </footer>
      </div>
    </div>
    <div className="column is-5 is-12-mobile is-half-tablet">
      <div className="card is-fullwidth">
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column is-3">
              <img src={ads} alt="Ads icon" />
            </div>
            <div className="column is-9">
              <div className="content">
                <h2>Ads</h2>
                <p>
                  {t('ads-description')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <span className=" card-footer-item"><strong><small>Coming soon</small></strong></span>
        </footer>
      </div>
    </div>
    <div className="column is-5 is-12-mobile is-half-tablet">
      <div className="card is-fullwidth">
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column is-3">
              <img src={analytics} alt="Analytics icon" />
            </div>
            <div className="column is-9">
              <div className="content">
                <h2>Analytics</h2>
                <p>
                  {t('analytics-description')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <span className=" card-footer-item"><strong><small>Coming soon</small></strong></span>
        </footer>
      </div>
    </div>
    <div className="column is-5 is-12-mobile is-half-tablet">
      <div className="card is-fullwidth">
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column is-3">
              <img src={rate} alt="Rate my App icon" />
            </div>
            <div className="column is-9">
              <div className="content">
                <h2>Rate my App</h2>
                <p>
                  {t('rate-description')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <span className=" card-footer-item"><strong><small>Coming soon</small></strong></span>
        </footer>
      </div>
    </div>
  </div>
);

Content = translate('extensionsManager')(Content);

export default () => {
  const RootContainer = deps.elements.RootContainer;
  return (
    <RootContainer>
      <h1>Manage extensions</h1>
      <hr />
      <ComingSoon />
      <br />
      <Content />
    </RootContainer>
  );
};
