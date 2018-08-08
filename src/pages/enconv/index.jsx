import React from 'react';
import { Button, Grid, Cell } from 'react-md';

import styles from "./Enconv.module.scss"

function hexToUtf8(hex) {
  return Buffer.from(hex, 'hex').toString();
};

function utf8ToHex(utf8) {
  return Buffer.from(utf8).toString('hex');
}

class Enconv extends React.Component {
  constructor(props) {
    super(props);

    this.utf8Ref = React.createRef();
    this.hexRef = React.createRef();
  }

  utf8 = 'Hello, world!こんにちは、世界！';

  convertFromUtf8 = () => {
    let utf8 = this.utf8Ref.current.value;
    try {
      let hex = utf8ToHex(utf8);
      this.hexRef.current.value = hex;
    } catch (e) {
    }
  };

  convertFromHex = () => {
    let hex = this.hexRef.current.value;
    try {
      let utf8 = hexToUtf8(hex);
      this.utf8Ref.current.value = utf8;
    } catch (e) {
    }
  }

  render () {
    return (
      <div>
        <Grid gutter={8}>
          <Cell desktopSize={4}
                tabletSize={6}
                phoneSize={12}
          >
            <h3>Text(ASCII/ANSI) UTF-8 文本</h3>
            <textarea className={styles.encodeBox}
                      defaultValue={this.utf8}
                      ref={this.utf8Ref} />
            <div>
              <Button raised primary swapTheming onClick={this.convertFromUtf8}>
                Convert 转换
              </Button>
            </div>
          </Cell>
          <Cell desktopSize={4}
                tabletSize={6}
                phoneSize={12}
          >
            <h3>Hexadecimal 十六进制</h3>
            <textarea className={styles.encodeBox}
                      defaultValue={utf8ToHex(this.utf8)}
                      ref={this.hexRef} />
            <div>
              <Button raised primary swapTheming onClick={this.convertFromUtf8}>
                Convert 转换
              </Button>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Enconv;
