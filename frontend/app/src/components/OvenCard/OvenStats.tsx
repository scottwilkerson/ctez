import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Flex,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { useOvenStats } from '../../hooks/utilHooks';

const OvenStats: React.FC = () => {
  const { stats: rawStats } = useOvenStats();
  const background = useColorModeValue('white', 'cardbgdark');
  const textcolor = useColorModeValue('text2', 'white');

  const stats = useMemo(() => {
    if (!rawStats) {
      return [];
    }

    const { outStandingCtez, maxMintableCtez, remainingMintableCtez } = rawStats;
    return [
      {
        label: 'Outstanding Ctez',
        value: outStandingCtez,
        percentage: 67,
      },
      {
        label: 'Max Mintable Ctez',
        value: maxMintableCtez,
        percentage: 84,
      },
      {
        label: 'Remaining Ctez',
        value: remainingMintableCtez,
        percentage: 46,
      },
    ];
  }, [rawStats]);

  return (
    <Stack p={8} spacing={4} backgroundColor={background} borderRadius={16}>
      <Text color={textcolor} fontWeight="600">
        Ctez Stats
      </Text>

      <Divider />

      <Flex justifyContent="space-between">
        {stats.map(({ label, value, percentage }) => (
          <Box key={label} textAlign="center">
            <CircularProgress
              color={percentage > 50 ? (percentage > 80 ? '#38CB89' : '#377DFF') : '#FFAB00'}
              value={percentage}
              size="80px"
              thickness={8}
              capIsRound
            >
              <CircularProgressLabel fontWeight="600" fontSize="lg">
                {percentage}%
              </CircularProgressLabel>
            </CircularProgress>

            <Text fontWeight="600" color={textcolor} fontSize="lg">
              {value}
            </Text>
            <Text fontWeight="500" color="#B0B7C3" fontSize="xs">
              {label}
            </Text>
          </Box>
        ))}
      </Flex>
    </Stack>
  );
};

export default OvenStats;