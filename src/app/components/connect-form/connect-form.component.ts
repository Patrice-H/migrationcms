import { Component } from '@angular/core';

@Component({
  selector: 'app-connect-form',
  templateUrl: './connect-form.component.html',
  styleUrls: ['./connect-form.component.scss'],
})
export class ConnectFormComponent {
  labelNames: string[] = ['Hôte', "Nom d'utilisateur", 'Mot de passe', 'Port'];
  labels: string[] = ['host', 'username', 'password', 'port'];
  status: string[] = [
    'Status: Connecting to 38.108.185.71.420',
    'Status: Connection established, initializing TLS...',
    'Status: Verifying certificate...',
    'Status: TLS connection established, sending HTTP request',
    'Status: Directory listing of "/" successful',
  ];
}
