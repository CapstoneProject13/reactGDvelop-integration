var gdjs;(function(s){class l{constructor(e){this._platformRBush=new rbush}static getManager(e){return e.platformsObjectsManager||(e.platformsObjectsManager=new s.PlatformObjectsManager(e)),e.platformsObjectsManager}addPlatform(e){e.currentRBushAABB?e.currentRBushAABB.updateAABBFromOwner():e.currentRBushAABB=new s.BehaviorRBushAABB(e),this._platformRBush.insert(e.currentRBushAABB)}removePlatform(e){this._platformRBush.remove(e.currentRBushAABB)}getAllPlatformsAround(e,t,n){const h=e.getWidth(),g=e.getHeight(),m=e.getDrawableX()+e.getCenterX(),d=e.getDrawableY()+e.getCenterY(),r=s.staticObject(l.prototype.getAllPlatformsAround);r.minX=m-h/2-t,r.minY=d-g/2-t,r.maxX=m+h/2+t,r.maxY=d+g/2+t;const u=this._platformRBush.search(r);n.length=0;for(let f=0;f<u.length;f++){const c=u[f].behavior,o=c.owner.getAABB();o.min[0]<=r.maxX&&o.min[1]<=r.maxY&&o.max[0]>=r.minX&&o.max[1]>=r.minY&&n.push(c)}}}s.PlatformObjectsManager=l;const a=class extends s.RuntimeBehavior{constructor(e,t,n){super(e,t,n);this._oldX=0;this._oldY=0;this._oldWidth=0;this._oldHeight=0;this._oldAngle=0;this.currentRBushAABB=null;this._registeredInManager=!1;this._platformType=t.platformType,t.platformType==="Ladder"?this._platformType=a.LADDER:t.platformType==="Jumpthru"?this._platformType=a.JUMPTHRU:this._platformType=a.NORMALPLAFTORM,this._canBeGrabbed=t.canBeGrabbed||!1,this._yGrabOffset=t.yGrabOffset||0,this._manager=l.getManager(e)}updateFromBehaviorData(e,t){return e.platformType!==t.platformType&&this.changePlatformType(t.platformType),e.canBeGrabbed!==t.canBeGrabbed&&(this._canBeGrabbed=t.canBeGrabbed),e.yGrabOffset!==t.yGrabOffset&&(this._yGrabOffset=t.yGrabOffset),!0}onDestroy(){this._manager&&this._registeredInManager&&this._manager.removePlatform(this)}doStepPreEvents(e){!this.activated()&&this._registeredInManager?(this._manager.removePlatform(this),this._registeredInManager=!1):this.activated()&&!this._registeredInManager&&(this._manager.addPlatform(this),this._registeredInManager=!0),(this._oldX!==this.owner.getX()||this._oldY!==this.owner.getY()||this._oldWidth!==this.owner.getWidth()||this._oldHeight!==this.owner.getHeight()||this._oldAngle!==this.owner.getAngle())&&(this._registeredInManager&&(this._manager.removePlatform(this),this._manager.addPlatform(this)),this._oldX=this.owner.getX(),this._oldY=this.owner.getY(),this._oldWidth=this.owner.getWidth(),this._oldHeight=this.owner.getHeight(),this._oldAngle=this.owner.getAngle())}doStepPostEvents(e){}onActivate(){this._registeredInManager||(this._manager.addPlatform(this),this._registeredInManager=!0)}onDeActivate(){!this._registeredInManager||(this._manager.removePlatform(this),this._registeredInManager=!1)}changePlatformType(e){e==="Ladder"?this._platformType=a.LADDER:e==="Jumpthru"?this._platformType=a.JUMPTHRU:this._platformType=a.NORMALPLAFTORM}getPlatformType(){return this._platformType}canBeGrabbed(){return this._canBeGrabbed}getYGrabOffset(){return this._yGrabOffset}static isOnPlatformTest(e,t,n){return e.getBehavior(n).isOnFloorObject(t)}};let i=a;i.NORMALPLAFTORM=0,i.JUMPTHRU=1,i.LADDER=2,s.PlatformRuntimeBehavior=i,s.registerBehavior("PlatformBehavior::PlatformBehavior",s.PlatformRuntimeBehavior)})(gdjs||(gdjs={}));
//# sourceMappingURL=platformruntimebehavior.js.map