import React from 'react';
import { Grid, Card, Container, Image, Icon } from 'semantic-ui-react';

const CardList = (props) => {
  return(
    <div>
      <Container>
        <Card fluid>
          <Card.Content>
            <Card.Header>Followers</Card.Header>
          </Card.Content>
          <Card.Content>
            <Grid columns={4}>
              <Grid.Row>
                {props.followersData.map(follower =>
                  <Grid.Column key={follower.id}>
                    <Card color="black">
                      <Image src={follower.avatar_url} wrapped ui={false} />
                      <Card.Content>
                        <Card.Header><Icon name="github" />{follower.login}</Card.Header>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                )}
              </Grid.Row>
            </Grid>
          </Card.Content>  
        </Card>
      </Container>
    </div>
  )
}

export default CardList;