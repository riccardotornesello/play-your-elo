import {
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

import { League } from '../../features/leagues/models/league';

export type LeagueDescriptionProps = {
  league: League;
  children?: ReactNode;
};

export default function LeagueDescription({
  league,
  children,
}: LeagueDescriptionProps) {
  return (
    <Card>
      <CardBody>
        <Flex>
          <Flex flex='1' direction='column' justify='center'>
            <Heading>{league.name}</Heading>
            <Text>{league.description}</Text>
          </Flex>
          {children && (
            <VStack w='200px' mx={3} spacing={2}>
              {children}
            </VStack>
          )}
        </Flex>
      </CardBody>
    </Card>
  );
}
