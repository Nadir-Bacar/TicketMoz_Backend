export interface SendTicketEmailParams {
  email: string;
  userName: string;
  eventName: string;
  tickets: Ticket[];
  eventLocation: string;
  eventDate: string;
  supportPhone: string;
  organizationName: string;
  websiteUrl: string;
  socialMediaLinks: string;
}

export interface Ticket {
  id: string;
  type: string;
  ticketUrl: string;
}
