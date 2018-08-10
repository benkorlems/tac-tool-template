/*eslint no-useless-escape: 0*/
export default `import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

function RaisedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="raised" className={classes.button}>
        Default
      </Button>
      <Button variant="raised" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="raised" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button variant="raised" color="secondary" disabled className={classes.button}>
        Disabled
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="raised-button-file"
        multiple
        type="file"
      />
      <label htmlFor="raised-button-file">
        <Button variant="raised" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}

RaisedButtons.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(RaisedButtons);
`;
