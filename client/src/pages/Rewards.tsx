import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Star, TrendingUp, Lock, Check } from "lucide-react";
import { useLocation } from "wouter";
import DesktopLayout from "@/components/DesktopLayout";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Design: Modern & Accessible - Desktop Only
 * Points system and gift card rewards
 */

export default function Rewards() {
  const [, navigate] = useLocation();
  const [selectedReward, setSelectedReward] = useState<number | null>(null);

  const userPoints = 2450;
  const pointsThisMonth = 350;
  const totalEarned = 5200;

  const giftCards = [
    {
      id: 1,
      name: "Amazon Gift Card",
      value: "€25",
      pointsRequired: 1000,
      icon: "🛍️",
      description: "Valid for 2 years on Amazon.fr",
      available: true,
    },
    {
      id: 2,
      name: "Starbucks Card",
      value: "€15",
      pointsRequired: 600,
      icon: "☕",
      description: "Enjoy your favorite drinks",
      available: true,
    },
    {
      id: 3,
      name: "Netflix Subscription",
      value: "1 Month",
      pointsRequired: 1500,
      icon: "🎬",
      description: "Premium plan for 1 month",
      available: true,
    },
    {
      id: 4,
      name: "Spotify Premium",
      value: "1 Month",
      pointsRequired: 1500,
      icon: "🎵",
      description: "Ad-free music streaming",
      available: true,
    },
    {
      id: 5,
      name: "Uber Eats Voucher",
      value: "€50",
      pointsRequired: 2000,
      icon: "🍔",
      description: "Free meals delivery credit",
      available: true,
    },
    {
      id: 6,
      name: "Booking.com Voucher",
      value: "€100",
      pointsRequired: 3500,
      icon: "🏨",
      description: "Hotels and accommodations",
      available: false,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Completed house cleaning service",
      points: 150,
      date: "Today",
      type: "earned",
    },
    {
      id: 2,
      action: "Completed gardening project",
      points: 200,
      date: "Yesterday",
      type: "earned",
    },
    {
      id: 3,
      action: "Redeemed Amazon Gift Card",
      points: -1000,
      date: "3 days ago",
      type: "redeemed",
    },
    {
      id: 4,
      action: "Completed tutoring session",
      points: 100,
      date: "1 week ago",
      type: "earned",
    },
    {
      id: 5,
      action: "Completed pet sitting",
      points: 120,
      date: "2 weeks ago",
      type: "earned",
    },
  ];

  const handleRedeemCard = (cardId: number) => {
    const card = giftCards.find(c => c.id === cardId);
    if (card && userPoints >= card.pointsRequired) {
      toast.success(`Successfully redeemed ${card.name}! Check your email.`);
      setSelectedReward(null);
    } else if (card && userPoints < card.pointsRequired) {
      toast.error(`You need ${card.pointsRequired - userPoints} more points`);
    }
  };

  const canRedeem = (pointsRequired: number) => userPoints >= pointsRequired;

  return (
    <DesktopLayout activeTab="rewards">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Rewards & Points</h1>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Points Overview */}
          <Card className="p-6 bg-gradient-to-br from-teal-50 to-white border-teal-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Your Points</p>
                <p className="text-4xl font-bold text-primary">{userPoints.toLocaleString()}</p>
              </div>
              <Star size={32} className="text-yellow-400 fill-yellow-400" />
            </div>
            <p className="text-xs text-muted-foreground">
              Earn points by completing services. 1 service = 100-200 points
            </p>
          </Card>

          {/* This Month */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-blue-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">This Month</p>
                <p className="text-4xl font-bold text-blue-600">+{pointsThisMonth}</p>
              </div>
              <TrendingUp size={32} className="text-blue-500" />
            </div>
            <p className="text-xs text-muted-foreground">
              Keep completing services to earn more
            </p>
          </Card>

          {/* Total Earned */}
          <Card className="p-6 bg-gradient-to-br from-green-50 to-white border-green-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Total Earned</p>
                <p className="text-4xl font-bold text-green-600">{totalEarned.toLocaleString()}</p>
              </div>
              <Gift size={32} className="text-green-500" />
            </div>
            <p className="text-xs text-muted-foreground">
              All-time points earned
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left - Gift Cards */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">Available Rewards</h2>
            <div className="grid grid-cols-2 gap-4">
              {giftCards.map((card) => {
                const isRedeemable = canRedeem(card.pointsRequired);
                return (
                  <button
                    key={card.id}
                    onClick={() => setSelectedReward(card.id)}
                    className={`p-6 rounded-lg border-2 transition transform hover:scale-105 ${
                      selectedReward === card.id
                        ? "border-primary bg-teal-50"
                        : card.available
                        ? "border-border bg-white hover:border-primary"
                        : "border-gray-200 bg-gray-50 opacity-60"
                    } ${!card.available ? "cursor-not-allowed" : ""}`}
                    disabled={!card.available}
                  >
                    <div className="text-4xl mb-3">{card.icon}</div>
                    <h3 className="font-bold text-foreground text-lg mb-1">{card.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-2">{card.value}</p>
                    <p className="text-xs text-muted-foreground mb-4">{card.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-foreground">
                          {card.pointsRequired}
                        </span>
                      </div>
                      {isRedeemable ? (
                        <Check size={18} className="text-green-600" />
                      ) : (
                        <Lock size={18} className="text-gray-400" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right - Activity & Details */}
          <div className="col-span-1">
            {/* Selected Reward Details */}
            {selectedReward && (
              <Card className="p-6 mb-6">
                {(() => {
                  const card = giftCards.find(c => c.id === selectedReward);
                  return (
                    <>
                      <div className="text-center mb-6">
                        <div className="text-6xl mb-3">{card?.icon}</div>
                        <h3 className="text-xl font-bold text-foreground">{card?.name}</h3>
                        <p className="text-3xl font-bold text-primary mt-2">{card?.value}</p>
                      </div>

                      <div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Points Required:</span>
                          <span className="font-semibold text-foreground">{card?.pointsRequired}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Your Points:</span>
                          <span className={`font-semibold ${canRedeem(card?.pointsRequired || 0) ? "text-green-600" : "text-red-600"}`}>
                            {userPoints}
                          </span>
                        </div>
                        {canRedeem(card?.pointsRequired || 0) ? (
                          <div className="flex justify-between pt-3 border-t border-border">
                            <span className="text-sm text-muted-foreground">After Redemption:</span>
                            <span className="font-semibold text-foreground">
                              {userPoints - (card?.pointsRequired || 0)}
                            </span>
                          </div>
                        ) : (
                          <div className="flex justify-between pt-3 border-t border-border">
                            <span className="text-sm text-muted-foreground">Points Needed:</span>
                            <span className="font-semibold text-orange-600">
                              +{(card?.pointsRequired || 0) - userPoints}
                            </span>
                          </div>
                        )}
                      </div>

                      <Button
                        onClick={() => handleRedeemCard(selectedReward)}
                        disabled={!canRedeem(card?.pointsRequired || 0)}
                        className={`w-full py-3 rounded-lg font-medium transition ${
                          canRedeem(card?.pointsRequired || 0)
                            ? "bg-primary text-white hover:bg-teal-700"
                            : "bg-gray-200 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        {canRedeem(card?.pointsRequired || 0) ? "Redeem Now" : "Not Enough Points"}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center mt-4">
                        You'll receive the reward code via email
                      </p>
                    </>
                  );
                })()}
              </Card>
            )}

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex justify-between items-start p-3 hover:bg-gray-50 rounded-lg transition">
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                    </div>
                    <span
                      className={`font-bold text-sm ${
                        activity.type === "earned"
                          ? "text-green-600"
                          : "text-orange-600"
                      }`}
                    >
                      {activity.type === "earned" ? "+" : ""}{activity.points}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200">
          <h3 className="font-bold text-foreground mb-4 text-lg">How Points Work</h3>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100-200</div>
              <p className="text-sm text-muted-foreground">Points per service completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">600+</div>
              <p className="text-sm text-muted-foreground">Minimum points for rewards</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2 Years</div>
              <p className="text-sm text-muted-foreground">Points expiration period</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <p className="text-sm text-muted-foreground">No limit on earning</p>
            </div>
          </div>
        </Card>
      </div>
    </DesktopLayout>
  );
}
