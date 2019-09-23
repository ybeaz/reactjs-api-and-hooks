import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ContextMenuProvider } from './DataLayer/contextMenu'

import './ViewLayer/CssStyles/index.less'
// import './Shared/styles.less' 

import * as actions from './DataLayer/actions/index'
import store from './DataLayer/store'
import * as serviceFunc from './Shared/serviceFunc'
import { MainScreen } from './ViewLayer/Screens/Main.react'
import { Error404Screen } from './ViewLayer/Screens/Error404Screen.react'

const SCREENS = {
  MainScreen,
}

const themeSet = {
  0: { btnBkg: 'blue', bdrClr: 'red' },
  1: { btnBkg: 'blue', bdrClr: 'red' },
  2: { btnBkg: 'blue', bdrClr: 'red' },
}

const themeList = {
  0: { bkg: 'red', clr: 'blue' },
  1: { bkg: 'pink', clr: 'cyan' },
  2: { bkg: 'purple', clr: 'teal' },
  3: { bkg: 'indigo', clr: 'grean' },
  4: { bkg: 'blue', clr: 'lime' },
  5: { bkg: 'cyan', clr: 'yellow' },
  6: { bkg: 'teal', clr: 'amber' },
  7: { bkg: 'grean', clr: 'orange' },
  8: { bkg: 'lime', clr: 'brown' },
  9: { bkg: 'yellow', clr: 'red' },
  10: { bkg: 'amber', clr: 'pink' },
  11: { bkg: 'orange', clr: 'purple' },
  12: { bkg: 'brown', clr: 'indigo' },
}

const rootPart = ''
const { router } = {
  router: {
    routes: [
      { path: '', exact: true, screen: 'MainScreen' },
    ],
    redirects: [
      { from: `/${rootPart}/*`, to: 'item0', exact: true },
    ],
  },
}

const { routes, redirects } = router


const getRedirects = () => redirects
  .map(redirect => {
    const { from, to: screenPart, exact } = redirect
    const to = `/${rootPart}/${screenPart}`
    return (
      <Route
        key={from}
        {...{ path: from, exact }}
      >
        <Redirect {...{ from, to }} />
      </Route>
    )
  })

const getRoutes = () => routes
  .map((route, i) => {
    const { path: screenPart, exact, screen } = route
    const Screen = SCREENS[screen]
    const path = `/${rootPart}/${screenPart}`
    // console.info('App->getRoutes', { path, rootPart, screenPart, exact, screen })
    return (
      <Route
        key={i}
        {...{ path, exact }}
        component={() => <Screen themeList={themeList} themeSet={themeSet} />}
      />
    )
  })


const App = () => {

  // Section to set the favicon
  serviceFunc.setScreenFavicon(global, 'https://userto.com/img/favicon.ico')

  const menu = [
    {capture: 'Click me #0', index: 0 },
    {capture: 'Click me #1', index: 1 },
    {capture: 'Click me #2', index: 2 },
  ]

  // Section for store and data 
  // store.dispatch(actions.INIT_TREE_DATA({ treeData: {} }))
  // console.info('App', { store: store.getState() })

  return (
    <Provider store={store}>
      <ContextMenuProvider value={{ menu }}>
        <BrowserRouter>
          <Switch>
            {getRedirects()}
            {getRoutes()}
            <Route component={Error404Screen} />
          </Switch>
        </BrowserRouter>
      </ContextMenuProvider>
    </Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
