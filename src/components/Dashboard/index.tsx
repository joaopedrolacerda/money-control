import { Container } from '../Header/styles';
import { Summary } from '../summary';
import { TransactionsTable } from '../TransactionsTable';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
