import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SidebarProps, ThemeProps } from '../../shared/prop-types/ReducerProps';

class MainWrapper extends PureComponent {
  static propTypes = {
    sidebar: SidebarProps.isRequired,
    theme: ThemeProps.isRequired,
    children: PropTypes.element.isRequired,
  };

  render() {
    const { sidebar, theme } = this.props;

    const wrapperClass = classNames({
      wrapper: true,
      'wrapper--full-width': sidebar.collapse,
    });

    return (
      <div className={theme.className}>
        <div className={wrapperClass}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  theme: state.theme,
  sidebar: state.sidebar,
}))(MainWrapper);
