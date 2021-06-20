import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import { HomePage } from './pages';
import { useRecoilValue } from 'recoil';
import { Theme, themeState } from '@atoms/theme';
import { AppDarkTheme, AppLightTheme } from './utils/theme';

const engine = new Styletron();

export function App() {
  const theme = useRecoilValue(themeState);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme === Theme.DARK ? AppDarkTheme : AppLightTheme}>
        <Suspense fallback={<></>}>
          <Router>
            <Switch>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
