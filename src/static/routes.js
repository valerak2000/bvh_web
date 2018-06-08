import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { UnderConstructView, NotFoundView, LoginView, ProtectedView, MapView } from './containers';
import { HomeView, ElektronnayaPriemnayaView, BlackoutsView, AvailableCapacityMapView } from './containers';
import { CommonInfoView, LeadershipView, ContactView, VacanciesView, OurHistoryView, ZakupkiRaskrytieView, 
        PoluchenieTekhnicheskikhUsloviyView, OformlenieDogovoraOPodklyucheniiView, RegulatoryDocView, TarifsView, DebtorsView,
        NewsView, NewsAboutUsView } from './containers';
import requireAuthentication from './utils/requireAuthentication';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path = "/" component = { HomeView } />
                <Route exact path = "/home" component = { HomeView } />
                <Route exact path = "/home/elektronnaya_priemnaya" component = { ElektronnayaPriemnayaView } />
                <Route exact path = "/home/blackouts" component = { BlackoutsView } />
                <Route exact path = "/home/available_capacity_map" component = { AvailableCapacityMapView } />

                <Route exact path = "/about" component = { CommonInfoView } />>
                <Route exact path = "/about/common_info" component = { CommonInfoView } />>
                <Route exact path = "/about/leadership" component = { LeadershipView } />
                <Route exact path = "/about/contacts" component = { ContactView } />
                <Route exact path = "/about/vacancies" component = { VacanciesView } />
                <Route exact path = "/about/history" component = { OurHistoryView } />
                <Route exact path = "/about/zakupki_raskrytie_informacii" component = { ZakupkiRaskrytieView } />

                <Route exact path = "/customers" component = { PoluchenieTekhnicheskikhUsloviyView } />
                <Route exact path = "/customers/connection" component = { PoluchenieTekhnicheskikhUsloviyView } />
                <Route exact path = "/customers/connection/poluchenie_tekhnicheskikh_usloviy" component = { PoluchenieTekhnicheskikhUsloviyView } />
                <Route exact path = "/customers/connection/oformlenie_dogovora_o_podklyuchenii" component = { OformlenieDogovoraOPodklyucheniiView } />
                <Route exact path = "/customers/connection/oformlenie_aktov_o_podklyuchenii" component = { OformlenieAktovOPodklyucheniiView } />
                <Route exact path = "/customers/fizlica" component = { PoluchenieTekhnicheskikhUsloviyView } />
                <Route exact path = "/customers/regulatory_doc" component = { RegulatoryDocView } />
                <Route exact path = "/customers/tarifs" component = { TarifsView } />
                <Route exact path = "/customers/debtors" component = { DebtorsView } />

                <Route exact path = "/news" component = { NewsView } />
                <Route exact path = "/news/smi_o_nashey_rabote" component = { NewsAboutUsView } />

                <Route exact path = "/map" component = { MapView } />
                <Route exact path = "/login" component = { LoginView } />
                <Route exact path = "/protected" component = { requireAuthentication(ProtectedView) } />
                <Route component = { NotFoundView } />
            </Switch>
        );
    }
}

export default Routes