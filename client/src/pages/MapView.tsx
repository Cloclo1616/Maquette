import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation, Filter, X } from "lucide-react";
import { useLocation } from "wouter";
import DesktopLayout from "@/components/DesktopLayout";
import { useState } from "react";


/**
 * Design: Modern & Accessible - Desktop Only
 * Interactive map showing requests and user location
 */

export default function MapView() {
  const [, navigate] = useLocation();
  const [selectedRequest, setSelectedRequest] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const userLocation = { lat: 48.8566, lng: 2.3522 }; // Paris

  const requests = [
    {
      id: 1,
      title: "Need help with garden landscaping",
      category: "Gardening",
      lat: 48.8566,
      lng: 2.3522,
      distance: "0.2 km",
      urgency: "normal",
      requester: "Marie D.",
      color: "#10b981",
    },
    {
      id: 2,
      title: "House cleaning needed",
      category: "House Cleaning",
      lat: 48.8596,
      lng: 2.3505,
      distance: "0.5 km",
      urgency: "high",
      requester: "Pierre L.",
      color: "#f59e0b",
    },
    {
      id: 3,
      title: "Plumbing repair required",
      category: "Repairs",
      lat: 48.8536,
      lng: 2.3545,
      distance: "0.8 km",
      urgency: "urgent",
      requester: "Sophie M.",
      color: "#ef4444",
    },
    {
      id: 4,
      title: "English tutoring for kids",
      category: "Tutoring",
      lat: 48.8606,
      lng: 2.3515,
      distance: "1.2 km",
      urgency: "normal",
      requester: "Jean T.",
      color: "#3b82f6",
    },
    {
      id: 5,
      title: "Pet sitting for the weekend",
      category: "Pet Sitting",
      lat: 48.8556,
      lng: 2.3555,
      distance: "1.5 km",
      urgency: "normal",
      requester: "Emma L.",
      color: "#8b5cf6",
    },
  ];

  const categories = ["all", "Gardening", "House Cleaning", "Repairs", "Tutoring", "Pet Sitting"];

  const filteredRequests = filterCategory === "all" 
    ? requests 
    : requests.filter(r => r.category === filterCategory);

  const handleRequestClick = (id: number) => {
    setSelectedRequest(id);
  };

  const handleNavigate = () => {
    if (selectedRequest) {
      // Navigate to create request with pre-filled data
      navigate("/create-request");
    }
  };

  return (
    <DesktopLayout activeTab="map">
      <div className="p-8 h-screen flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Map View</h1>
          <Button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-white border border-border text-foreground hover:bg-gray-50 transition flex items-center gap-2"
          >
            <Filter size={18} />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-6 flex-1 overflow-hidden">
          {/* Left Sidebar - Filters & List */}
          <div className="col-span-1 flex flex-col bg-white rounded-lg border border-border overflow-hidden">
            {/* Filters */}
            {showFilters && (
              <div className="p-4 border-b border-border bg-gray-50">
                <h3 className="font-semibold text-foreground mb-3">Filter by Category</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={filterCategory === cat}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-foreground capitalize">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Requests List */}
            <div className="flex-1 overflow-y-auto divide-y divide-border">
              {filteredRequests.length > 0 ? (
                filteredRequests.map((request) => (
                  <button
                    key={request.id}
                    onClick={() => handleRequestClick(request.id)}
                    className={`w-full p-4 hover:bg-gray-50 transition text-left border-l-4 ${
                      selectedRequest === request.id
                        ? "border-l-primary bg-teal-50"
                        : "border-l-transparent"
                    }`}
                  >
                    <div className="flex gap-3 items-start">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5"
                        style={{ backgroundColor: request.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground text-sm truncate">
                          {request.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{request.category}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          📍 {request.distance} • {request.requester}
                        </p>
                        <div className="mt-2">
                          <span
                            className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${
                              request.urgency === "urgent"
                                ? "bg-red-100 text-red-700"
                                : request.urgency === "high"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {request.urgency.charAt(0).toUpperCase() + request.urgency.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-muted-foreground">
                  No requests found
                </div>
              )}
            </div>
          </div>

          {/* Right - Map & Details */}
          <div className="col-span-3 flex flex-col gap-6">
            {/* Map */}
            <div className="flex-1 bg-white rounded-lg border border-border overflow-hidden relative">
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center relative">
                {/* Map Placeholder with Markers */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><defs><pattern id=%22grid%22 width=%2220%22 height=%2220%22 patternUnits=%22userSpaceOnUse%22><path d=%22M 20 0 L 0 0 0 20%22 fill=%22none%22 stroke=%22%23e5e7eb%22 stroke-width=%220.5%22/></pattern></defs><rect width=%22100%22 height=%22100%22 fill=%22%23f0f9ff%22/><rect width=%22100%22 height=%22100%22 fill=%22url(%23grid)%22/></svg>')] opacity-30" />
                
                {/* User Location Marker */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-20" style={{ width: "80px", height: "80px", left: "-40px", top: "-40px" }} />
                    {/* Marker */}
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <Navigation size={12} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Request Markers */}
                {filteredRequests.map((request) => {
                  const offsetX = (request.lng - userLocation.lng) * 5000;
                  const offsetY = (request.lat - userLocation.lat) * 5000;
                  return (
                    <button
                      key={request.id}
                      onClick={() => handleRequestClick(request.id)}
                      className={`absolute w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center transition transform hover:scale-110 ${
                        selectedRequest === request.id ? "ring-2 ring-offset-2 ring-primary" : ""
                      }`}
                      style={{
                        backgroundColor: request.color,
                        left: `calc(50% + ${offsetX}px)`,
                        top: `calc(50% + ${offsetY}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      title={request.title}
                    >
                      <MapPin size={14} className="text-white" />
                    </button>
                  );
                })}
              </div>

              {/* Map Controls */}
              <div className="absolute top-4 right-4 flex gap-2">
                <Button className="bg-white border border-border text-foreground hover:bg-gray-50 w-10 h-10 p-0 flex items-center justify-center">
                  +
                </Button>
                <Button className="bg-white border border-border text-foreground hover:bg-gray-50 w-10 h-10 p-0 flex items-center justify-center">
                  −
                </Button>
              </div>
            </div>

            {/* Request Details */}
            {selectedRequest && (
              <Card className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {requests.find(r => r.id === selectedRequest)?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      by {requests.find(r => r.id === selectedRequest)?.requester}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedRequest(null)}
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Category</p>
                    <p className="font-semibold text-foreground">
                      {requests.find(r => r.id === selectedRequest)?.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Distance</p>
                    <p className="font-semibold text-foreground">
                      {requests.find(r => r.id === selectedRequest)?.distance}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Urgency</p>
                    <p className="font-semibold text-foreground capitalize">
                      {requests.find(r => r.id === selectedRequest)?.urgency}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Status</p>
                    <p className="font-semibold text-green-600">Open</p>
                  </div>
                </div>

                <Button
                  onClick={handleNavigate}
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition"
                >
                  Respond to Request
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
}
