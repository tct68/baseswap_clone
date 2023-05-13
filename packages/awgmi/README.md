# @baseswap/awgmi

Connect to Aptos with similar [wagmi](https://github.com/wagmi-dev/wagmi) React hooks.

Support Aptos Wallet Connectors:
- Petra
- Martian
- Pontem
- Fewcha
- SafePal
- Trust Wallet


```jsx
import {
  createClient,
  AwgmiConfig,
  useConnect,
  getDefaultProviders,
  defaultChains,
} from '@baseswap/awgmi';
import { PetraConnector } from '@baseswap/awgmi/connectors/petra'
import { MartianConnector } from '@baseswap/awgmi/connectors/martain'
import { SafePalConnector } from '@baseswap/awgmi/connectors/safePal'
import { BloctoConnector } from '@baseswap/awgmi/connectors/blocto'
import { FewchaConnector } from '@baseswap/awgmi/connectors/fewcha'

 // import { mainnet, testnet } from '@baseswap/awgmi/core'
const chains = defaultChains // mainnet, testnet, devnet

export const client = createClient({
  connectors: [
    new PetraConnector({ chains }),
    new MartianConnector({ chains }),
    new PetraConnector({ chains, options: { name: 'Trust Wallet', id: 'trustWallet' } }),
    new SafePalConnector({ chains }),
    new BloctoConnector({ chains, options: { appId: BLOCTO_APP_ID } }),
    new FewchaConnector({ chains }),
  ],
  provider: getDefaultProviders,
  autoConnect: true,
});


function App() {
  return (
    <AwgmiConfig client={client}>
      <YourApp />
    </AwgmiConfig>
  )
}
```


## Connector
```jsx
import { useConnect, useDisconnect } from '@baseswap/awgmi'

function ConnectButton() {
  const { connect, connectors } = useConnect()

  return (
    <div>
      {connectors.map((connector) => (
        <button type="button" key={connector.id} onClick={() => connect({ connector, networkName: 'mainnet' })}>
          {connector.name}
        </button>
      ))}
    </div>
  )
}
```


## Hooks
```jsx
import {
  useAccountBalance,
  useAccountBalances,
  useAccountResource,
  useAccountResources,
  useCoin,
  useCoins,
  useNetwork,
  useSendTransaction,
  useSimulateTransaction,
  useTableItem,
} from '@baseswap/awgmi'
```

### Balance
```js
const { data } = useAccountBalance({
  address: Address,
  coin: '0x1::aptos_coin::AptosCoin',
  watch: true
})
```

### Send Transaction
```js
import { UserRejectedRequestError } from '@baseswap/awgmi'

const { sendTransactionAsync } = useSendTransaction()

sendTransactionAsync({
  payload: {
    type: 'entry_function_payload',
    function: '<address>::message::set_message',
    arguments: ['are we gonna make it?'],
    type_arguments: [],
  },
}).catch(err => {
  if (err instanceof UserRejectedRequestError) {
    // handle user reject
  }
  // handle transaction error
})
```