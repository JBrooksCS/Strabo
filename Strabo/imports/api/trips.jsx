import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Trips = new Mongo.Collection('trips');

if (Meteor.isServer) {
    //publishing trips that belong to the current user 

    Meteor.publish("trips", function tripsPublication() {
        return Trips.find({
            $or: [
                { owner: this.userId }
            ]
        })
    })
}
Meteor.methods({
    'trips.insert'(name, location) {
        check(name, String);
        check(location, String);

        if (!this.userId) {
            throw new Meteor.Error('not authorized');
        }

        Trips.insert({
            name,
            location,
            owner: this.userId,
        });
    },
    'trips.remove'(tripId) {
        check(tripId, String);
        const trip = Trips.findOne(tripId);
        if (trip.owner !== this.userId) {
            throw new Meteor.Error('not-authorized')
        }
        Trips.remove(tripId)
    }
})
