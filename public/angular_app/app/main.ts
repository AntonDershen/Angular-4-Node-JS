import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/app.module/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);