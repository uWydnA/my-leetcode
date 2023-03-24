import { observable, action } from "mobx";
import { EventEmitter } from "events";
import qs from "query-string";
import * as pathToRegexp from "path-to-regexp";
import {
    IApp,
    IAppParams,
    IAppQuery,
    IAppView,
    IAppContainerStore,
    IAppContainerOptions,
    AppContainerType,
    Placement,
    Rectangle,
    RectangleCenter,
} from "./AppManagerStore.types";
import { isElectronRenderer } from "../utils/platform";
import { defaultMaxListeners } from "../constants";

let CONTAINER_ID = 0;


export class AppContainerStore implements IAppContainerStore {
    id: number;

    eventBus: EventEmitter;


    @observable.ref
    query: IAppQuery;

    constructor(app: IApp, view: IAppView<any>, params: IAppParams, query: IAppQuery, options: IAppContainerOptions) {
        
    }

    get url(): string {
        return qs.stringifyUrl(
            {
                url: pathToRegexp.compile(`${this.app.name}${this.view.path}`)(this.params),
                query: this.query,
            },
            { arrayFormat: "comma" }
        );
    }

    ready(): Promise<IAppContainerStore> {
        return Promise.resolve(this);
    }
  
}
