import { Button, Card, Grid } from '@alifd/next';
import React from 'react';
import games from './games';

const prefix =
  'https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_2.0,f_auto,q_auto,w_300/b_rgb:ffffff/v1';

export default function Games() {
  return (
    <div>
      <Grid.Row gutter={30} wrap>
        {games.map((game) => (
          <Grid.Col xs={6} key={game.objectID}>
            <Card free style={{ marginBottom: 30 }}>
              <Card.Header title={game.title} />
              <Card.Content>
                <img
                  src={`${prefix}/${game.productImage}`}
                  width="400"
                  height="225"
                  style={{ width: '100%', height: 'auto' }}
                />
                <div>{game.description}</div>
              </Card.Content>
              <Card.Actions>
                <Button type="primary">Buy ${game.price.regPrice}</Button>
              </Card.Actions>
            </Card>
          </Grid.Col>
        ))}
      </Grid.Row>
    </div>
  );
}
