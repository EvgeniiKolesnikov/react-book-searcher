import { useDispatch, useSelector } from 'react-redux';
import { Header, Main } from './layout';
import type { RootState, AppDispatch } from './index';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

export const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cash = useSelector((state: RootState) => state.cash.cash);
  const customers = useSelector(
    (state: RootState) => state.customers.customers
  );

  console.log(cash);

  const addCash = (cash: number) => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };
  const getCash = (cash: number) => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  const addCustomer = (name: string) => {
    const customer = { name, id: Date.now() };
    dispatch(addCustomerAction(customer));
  };

  // const removeCustomers = (name: string) => {
  //   const customer = { name, id: Date.now() };
  //   dispatch({ type: 'REMOVE_CUSTOMERS', payload: customer });
  // };

  const removeCustomer = (customer: { name?: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; id?: any; }) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <>
      <Header />

      <Main />
      <div className='cash'>{cash}</div>

      <div onClick={() => addCash(Number(prompt()))}>addCash</div>
      <div onClick={() => getCash(Number(prompt()))}>getCash</div>
      <div onClick={() => addCustomer(String(prompt()))}>addCustomer</div>
      {/* <div onClick={() => removeCustomers(String(prompt()))}>delCustomer</div> */}
      {customers.length > 0 ? (
        <div>
          {customers.map(
            (customer: {
              name:
                | boolean
                | ReactChild
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            }) => (
              <div onClick={() => removeCustomer(customer)}>
                {customer.name}
              </div>
            )
          )}
        </div>
      ) : (
        <div>No customers</div>
      )}
    </>
  );
};
