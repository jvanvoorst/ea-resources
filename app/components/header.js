import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-bootstrap';

function Header(props) {
    return (
        <Grid>
            <Row>
                <header style={styles.header}>
                    <div style={styles.banner}>
                        <Col md={6}>
                            <p style={styles.bannerText}>University Libraries</p>
                        </Col>
                        <Col md={6}>
                            <p style={styles.appName}>{props.appName}</p>
                        </Col>
                    </div>
                </header>
            </Row>
        </Grid>
    );
}

Header.propTypes = {
    appName: PropTypes.string.isRequired
};

const styles = {
    header: {
        width: '100%',
        height: '120px',
        backgroundColor: 'black'
    },
    banner: {
        height: '100%',
        backgroundImage: 'url(./app/assets/banner.jpg)',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        fontSize: '28px',
        fontFamily: [
            'HelveticaNeue-Light',
            'Helvetica Neue',
            'sans-serif',

        ],
    },
    bannerText: {
        padding: '30px 0 0 80px'
    },
    appName: {
        height: '100px',
        lineHeight: '100px',
        float: 'right'
    }
};

export default Header;
