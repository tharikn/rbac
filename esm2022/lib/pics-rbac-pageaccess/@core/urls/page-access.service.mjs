import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccessManagementConfig } from '../../@core/urls/access-management-url.config';
import { DataBaseConfig } from './rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../service/data-store.service";
export class PageAccessService {
    _storeservice;
    isfull = false;
    hide = false;
    isread = false;
    isreadwrite = false;
    // constructor(private httpService: HttpService) {
    //    // This is intentional
    // }
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    /**
     * when user selected policy
     * @param access Raw valur of RBac form
     * @returns form array of DA
     * @childFunction of saveRbac
     */
    accessByPolicy(access, id, policyGroupData, selectedFieldData, pageData) {
        const fullArray = [];
        for (const value of id) {
            const selectedData = policyGroupData.filter(key => key.id === value);
            const formObj = {
                id: '',
                description: '',
                policygroupname: '',
                pageConfigs: [],
                assetConfigs: []
            };
            this.setPolicyObj(formObj, selectedData, value);
            this.loadAccessForPage(access, selectedData, formObj, value, pageData);
            if (access.fieldLevelData.length) {
                this.loadAccessForFields(access, selectedData, formObj, value, selectedFieldData, pageData);
            }
            fullArray.push(formObj);
        }
        return fullArray;
    }
    /**
     * when user selected Persona
     * @param access Raw valur of RBac form
     * @returns form array of DA
     * @childFunction of saveRbac
     */
    accessByPersona(access, personaId, id, roleAddedData, selectedFieldData, pageData) {
        const fullArray = [];
        // const personaId = this.rbacForm.get('roleid').value;
        // const personaId = this.rbacForm.get('roleid').value;
        const formObj = {
            id: '',
            rolekey: '',
            rolename: '',
            description: '',
            effectivedate: '',
            pageConfigs: [],
            assetConfigs: [],
            rolePolicyGroupConfigs: []
        };
        for (const item of personaId) {
            const selectedData = roleAddedData.filter(key => key.id === item);
            this.setRoleObj(formObj, selectedData, item, id);
            this.loadAccessForPage(access, selectedData, formObj, item, pageData);
            if (access.fieldLevelData.length) {
                this.loadAccessForFields(access, selectedData, formObj, item, selectedFieldData, pageData);
            }
            fullArray.push(formObj);
        }
        return fullArray;
    }
    /**
     * when user selected User
     * @param access Raw valur of RBac form
     * @returns form array of DA
     * @childFunction of saveRbac
     */
    accessByUser(access, userId, id, roleids, userList, selectedFieldData, pageData) {
        const fullArray = [];
        for (const item of userId) {
            const selectedData = userList.filter(key => key.id === item);
            const formObj = { ...selectedData[0] };
            formObj.pageConfigs = [];
            formObj.assetConfigs = [];
            formObj.policyGroupConfigs = [];
            formObj.roleConfigs = [];
            console.log('======');
            this.setUserObj(formObj, selectedData, item, id, roleids);
            console.log('======1');
            this.loadAccessForPage(access, selectedData, formObj, item, pageData);
            console.log('======2');
            if (access.fieldLevelData.length) {
                this.loadAccessForFields(access, selectedData, formObj, item, selectedFieldData, pageData);
            }
            fullArray.push(formObj);
        }
        return fullArray;
    }
    /**
     * Fetch access list for dashboard access
     * @param access
     * @param assetDashBoardConfigs
     * @param formObj
     * @param id
     */
    loadAccessForPage(access, selectedData, formObj, id, pageData) {
        const existPageConfigs = selectedData[0]['pageConfigs'];
        for (const item of access.pageLevelData) {
            const selectedModule = pageData.filter(key => key.id === item['pageid']);
            const pageAccess = access.pageLevelData.filter(key => key.pageid === item['pageid']);
            this.pageAccessCheck(pageAccess);
            const pageKey = {
                id: null,
                isactive: true,
                isfull: this.isfull,
                hide: this.hide,
                isread: this.isread,
                isreadwrite: this.isreadwrite,
                pageid: item['pageid'],
                policygroupid: id,
                modulekey: selectedModule[0]['modulekey'],
                submodulekey: selectedModule[0]['submodulekey']
            };
            // check exist page length
            if (existPageConfigs.length) {
                const existIds = existPageConfigs.map(p => p.pageid);
                const chkPage = existIds.includes(item['pageid']);
                if (chkPage) {
                    const index = existIds.indexOf(item['pageid']);
                    if (index > -1) {
                        //if found
                        pageKey.id = existPageConfigs[index]['id'];
                        pageKey.isactive = false;
                        formObj.pageConfigs.push(pageKey);
                        existPageConfigs.splice(index, 1);
                    }
                }
                const d = { ...pageKey };
                d.id = null;
                d.isactive = true;
                formObj.pageConfigs.push(d);
            }
            else {
                formObj.pageConfigs.push(pageKey);
            }
        }
        // still existconfig length
        if (existPageConfigs.length) {
            existPageConfigs.map(t => {
                t.isactive = false;
                formObj.pageConfigs.push(t);
                return t;
            });
        }
    }
    pageAccessCheck(pageAccess) {
        if (pageAccess[0].pageAccess === '1') {
            this.isfull = true;
        }
        else if (pageAccess[0].pageAccess === '4') {
            this.hide = true;
        }
        else if (pageAccess[0].pageAccess === '3') {
            this.isread = true;
        }
        else if (pageAccess[0].pageAccess === '2') {
            this.isreadwrite = true;
        }
    }
    setPolicyObj(formObj, selectedData, id) {
        formObj.id = id;
        formObj.description = selectedData[0]['description'];
        formObj.policygroupname = selectedData[0]['policygroupname'];
    }
    loadAccessForFields(access, selectedData, formObj, id, selectedFieldData, pageData) {
        // console.log(selectedData)
        const assetConfigs = selectedData[0]['assetConfigs'].filter(key => key.modulekey !== null);
        // console.log('------------')
        const selectedModule = pageData.filter(key => key.id === access.fpages[0]['id']);
        // console.log(access.fieldLevelData)
        selectedFieldData =
            access.fieldLevelData !== null ? this.setSelectedFieldPage(access.fieldLevelData, selectedFieldData) : [];
        // console.log(selectedData, assetConfigs)
        for (const selectedField of selectedFieldData) {
            if (selectedField.access === null) {
                // continue;
            }
            console.log(selectedField);
            let isfull = false;
            let hide = false;
            let isread = false;
            let isreadwrite = false;
            if (selectedField.access === '2' || selectedField.access === '1') {
                isfull = true;
            }
            else if (selectedField.access === '4') {
                hide = true;
            }
            else if (selectedField.access === '3') {
                isread = true;
            }
            else if (selectedField.access === '2') {
                isreadwrite = true;
            }
            const aConfigs = {
                id: selectedField['id'] ? selectedField['id'] : null,
                isactive: true,
                isfull: isfull,
                hide: hide,
                isread: isread,
                isreadwrite: isreadwrite,
                assetid: selectedField['assetid'],
                policygroupid: id,
                pageid: selectedField['pageId'] ? selectedField['pageId'] : access.fpages[0]['id'],
                modulekey: selectedModule[0]['modulekey'],
                submodulekey: selectedModule[0]['submodulekey']
            };
            // check exist page length
            this.checkExistAsset(assetConfigs, selectedField, aConfigs, formObj);
        }
    }
    checkExistAsset(assetConfigs, selectedField, aConfigs, formObj) {
        if (assetConfigs.length) {
            const existIds = assetConfigs.map(p => p.assetid);
            const chkPage = existIds.includes(selectedField['assetid']);
            if (chkPage) {
                const index = existIds.indexOf(selectedField['assetid']);
                if (index > -1) {
                    //if found
                    aConfigs.id = assetConfigs[index]['id'];
                    aConfigs.isactive = false;
                    formObj.assetConfigs.push(aConfigs);
                    assetConfigs.splice(index, 1);
                }
            }
            const d = { ...aConfigs };
            d.isactive = true;
            d.id = null;
            formObj.assetConfigs.push(d);
        }
        else {
            formObj.assetConfigs.push(aConfigs);
        }
    }
    setRoleObj(formObj, selectedData, roleid, policyid) {
        formObj.id = roleid;
        formObj.rolekey = selectedData[0]['rolekey'];
        formObj.rolename = selectedData[0]['rolename'];
        formObj.effectivedate = selectedData[0]['effectivedate'];
        formObj.description = selectedData[0]['description'];
        // loop the policy group
        const id = policyid;
        const existRolePolicyConfig = selectedData[0]['rolePolicyGroupConfigs'];
        for (const item of id) {
            const rpolicyConfig = {
                id: null,
                isactive: true,
                policygroupid: item,
                roleid: roleid // role id
            };
            // check exist page length
            if (existRolePolicyConfig.length) {
                const existIds = existRolePolicyConfig.map(p => p.policygroupid);
                const chkPage = existIds.includes(item);
                if (chkPage) {
                    const index = existIds.indexOf(item);
                    if (index > -1) {
                        //if found
                        rpolicyConfig.id = existRolePolicyConfig[index]['id'];
                        existRolePolicyConfig.splice(index, 1);
                    }
                }
            }
            formObj.rolePolicyGroupConfigs.push(rpolicyConfig);
        }
        // still existconfig length
        if (existRolePolicyConfig.length) {
            existRolePolicyConfig.map(t => {
                t.isactive = false;
                formObj.rolePolicyGroupConfigs.push(t);
                return t;
            });
        }
    }
    setUserObj(formObj, selectedData, userId, id, roleids) {
        // loop the policy group
        const existRolePolicyConfig = selectedData[0]['policyGroupConfigs'];
        this.getCheckPolicyConfig(id, userId, existRolePolicyConfig, formObj);
        // still existconfig length
        if (existRolePolicyConfig.length) {
            existRolePolicyConfig.map(t => {
                t.isactive = false;
                formObj.policyGroupConfigs.push(t);
                return t;
            });
        }
        // loop the role group
        // const roleids = this.rbacForm.get('roleid').value;
        const existRoleId = selectedData[0]['roleConfigs'];
        for (const role of existRoleId) {
            const chkRoleData = roleids.includes(role['roleid']);
            const roleGrp = {
                id: role['id'],
                isactive: false,
                isdefaultrole: role['isdefaultrole'],
                userid: userId,
                roleid: role['roleid'],
                effectivedate: role['effectivedate']
            };
            if (chkRoleData) {
                const index1 = roleids.indexOf(role['roleid']);
                if (index1 > -1) {
                    //if found
                    roleids.splice(index1, 1);
                }
                roleGrp.isactive = true;
            }
            formObj.roleConfigs.push(roleGrp);
        }
        // check new roles group ids
        if (roleids.length) {
            for (const roleId of roleids) {
                const roleGrp = {
                    id: null,
                    isactive: true,
                    isdefaultrole: false,
                    userid: userId,
                    roleid: roleId,
                    effectivedate: new Date()
                };
                formObj.roleConfigs.push(roleGrp);
            }
        }
    }
    getCheckPolicyConfig(id, userId, existRolePolicyConfig, formObj) {
        for (const item of id) {
            const rpolicyConfig = {
                id: null,
                isactive: true,
                policygroupid: item,
                userid: userId // user id
            };
            // check exist page length
            if (existRolePolicyConfig.length) {
                const existIds = existRolePolicyConfig.map(p => p.policygroupid);
                const chkPage = existIds.includes(item);
                if (chkPage) {
                    const index = existIds.indexOf(item);
                    if (index > -1) {
                        //if found
                        rpolicyConfig.id = existRolePolicyConfig[index]['id'];
                        existRolePolicyConfig.splice(index, 1);
                    }
                }
            }
            formObj.policyGroupConfigs.push(rpolicyConfig);
        }
    }
    setSelectedFieldPage(updateArray, selectedFieldData) {
        // console.log('=========>', updateArray, selectedFieldData)
        if (updateArray?.length) {
            if (selectedFieldData?.length >= updateArray.length) {
                selectedFieldData = this.updateDuplicatesinArray([...selectedFieldData], [...updateArray]);
                return selectedFieldData;
            }
            else {
                selectedFieldData = [...updateArray];
                return selectedFieldData;
            }
        }
    }
    updateDuplicatesinArray(origArr, updatingArr) {
        const updatingArrids = new Set(updatingArr.map(ele => ele.assetid));
        return [...updatingArr, ...origArr.filter(ele => !updatingArrids.has(ele.assetid))];
    }
    getMostFrequentEle(arr) {
        const hashMap = arr.reduce((acc, val) => {
            acc[String(val)] = (acc[val] || 0) + 1;
            return acc;
        }, {});
        return Object.keys(hashMap).reduce((a, b) => (hashMap[a] > hashMap[b] ? a : b));
    }
    getAccessArrayOnClick(pagesFromField, pageData, selectedFieldData, savedPageAccessPatching, existingValue) {
        const accessArray = [];
        for (let i = 0; i < pagesFromField?.length; i++) {
            const pageName = pageData.filter(key => key.id === pagesFromField[i]);
            const fieldLevelExist = selectedFieldData.filter(ele => ele.pageId == pagesFromField[i]);
            const pageAccessValue = this.checkFieldLevelExist(fieldLevelExist, savedPageAccessPatching, pagesFromField, existingValue, i);
            if (!existingValue[i]) {
                const activeVersion = pageName[0]?.activeVersion;
                let tableSchemaConfig = activeVersion?.tableschemaconfig;
                tableSchemaConfig = tableSchemaConfig;
                const objectType = tableSchemaConfig?.objectType ? tableSchemaConfig.objectType : 'table';
                if (objectType === 'view') {
                    accessArray.push(new FormGroup({
                        pageName: new FormControl(pageName[0]?.pagename),
                        pageid: new FormControl(pagesFromField[i]),
                        // pageAccess: new FormControl('3'),
                        pageAccessCreate: new FormControl(false),
                        pageAccessRead: new FormControl(true),
                        pageAccessUpdate: new FormControl(false),
                        pageAccessDelete: new FormControl({ value: false, disabled: pageName[0]?.activeVersion?.templatejson }),
                        pageAccessNone: new FormControl(false),
                        validity: new FormControl('0'),
                        condition: new FormControl('always'),
                        fallbackTo: new FormControl('n')
                    }));
                }
                else {
                    accessArray.push(new FormGroup({
                        pageName: new FormControl(pageName[0]?.pagename),
                        pageid: new FormControl(pagesFromField[i]),
                        // pageAccess: new FormControl(pageAccessValue ? pageAccessValue : '2'),
                        pageAccessCreate: new FormControl(false),
                        pageAccessRead: new FormControl(true),
                        pageAccessUpdate: new FormControl(false),
                        pageAccessDelete: new FormControl({ value: false, disabled: pageName[0]?.activeVersion?.templatejson }),
                        pageAccessNone: new FormControl(false),
                        validity: new FormControl('0'),
                        condition: new FormControl('always'),
                        fallbackTo: new FormControl('n')
                    }));
                }
            }
            else {
                accessArray.push(new FormGroup({
                    pageName: new FormControl(pageName[0]?.pagename),
                    pageid: new FormControl(pagesFromField[i]),
                    // pageAccess: new FormControl(pageAccessValue ? pageAccessValue : '2'),
                    pageAccessCreate: new FormControl(pageAccessValue?.pageAccessCreate || false),
                    pageAccessRead: new FormControl(this.getPageReadAccess(pageAccessValue)),
                    pageAccessUpdate: new FormControl(pageAccessValue?.pageAccessUpdate || false),
                    pageAccessDelete: new FormControl({ value: pageAccessValue?.pageAccessDelete || false, disabled: pageName[0]?.activeVersion?.templatejson }),
                    pageAccessNone: new FormControl(pageAccessValue.pageAccessNone || false),
                    validity: new FormControl((pageAccessValue?.validity && String(pageAccessValue?.validity)) || '0'),
                    condition: new FormControl((pageAccessValue?.condition && pageAccessValue?.condition) || 'always'),
                    fallbackTo: new FormControl((pageAccessValue?.condition && pageAccessValue?.fallbackTo) || 'n')
                }));
            }
        }
        return accessArray;
    }
    getPageReadAccess(pageAccessValue) {
        if (pageAccessValue?.pageAccessCreate || pageAccessValue?.pageAccessUpdate || pageAccessValue?.pageAccessDelete) {
            return { value: true, disabled: true };
        }
        else {
            return pageAccessValue || false;
        }
    }
    getPageReadFormAccess(pageAccess) {
        if (pageAccess?.c || pageAccess?.u || pageAccess?.d) {
            return { value: true, disabled: true };
        }
        else {
            return pageAccess.r || false;
        }
    }
    getFieldReadAccess(fieldAccessValue) {
        if (!fieldAccessValue?.c || !fieldAccessValue?.u || !fieldAccessValue?.r) {
            return true;
        }
        else {
            return fieldAccessValue.r || false;
        }
    }
    getReadFormAccess(pageAccess) {
        if (pageAccess?.c || pageAccess?.u || pageAccess?.d) {
            return { value: true, disabled: true };
        }
        else {
            return pageAccess.r || false;
        }
    }
    checkFieldLevelExist(fieldLevelExist, savedPageAccessPatching, pagesFromField, existingValue, i) {
        let pageAccessValue;
        if (fieldLevelExist?.length && savedPageAccessPatching) {
            pageAccessValue = this.getMostFrequentEle(fieldLevelExist?.filter(ele => (ele.pageId = pagesFromField[i]))?.map(e => (e.access ? Number(e.access) : 0)));
        }
        else {
            pageAccessValue = existingValue?.find(ele => ele.pageid === pagesFromField[i]);
        }
        return pageAccessValue;
    }
    // This function for field level access
    getAccess(access, fieldPageLevel) {
        let accessField;
        if (fieldPageLevel.length > 0) {
            accessField = {
                'c': access?.c,
                'r': this.getFieldReadAccess(access),
                'u': access?.u,
                'hide': access?.hide
            };
        }
        else {
            accessField = {
                'r': (!access?.hide && !access?.r) ? true : access.r,
                'hide': access?.hide
            };
        }
        return accessField;
    }
    getOrganizationPage(orgId) {
        return this.httpService.get(AccessManagementConfig.EndPoint.Organization.getOrganization.replace('{orgId}', orgId));
    }
    getAssetByPageId(pId) {
        return this.httpService.get(`${AccessManagementConfig.EndPoint.Asset.getPageAsset}/${pId}`);
    }
    createAsset(selectedAccess, selectedId, asset) {
        let url;
        if (selectedAccess === 'user') {
            url = `org/user/${selectedId}`;
        }
        else if (selectedAccess === 'role') {
            url = `access-control/role/${selectedId}`;
        }
        else {
            url = `platform/page-designer/policygroup/${selectedId}`;
        }
        return this.httpService.post(`/${url}/${AccessManagementConfig.EndPoint.Asset.getAsset}`, asset);
    }
    updateAssetOnDeselect(selectedAccess, selectedId, asset) {
        let url;
        if (selectedAccess === 'user') {
            url = `org/user/${selectedId}`;
        }
        else if (selectedAccess === 'role') {
            url = `access-control/role/${selectedId}`;
        }
        else {
            url = `platform/page-designer/policygroup/${selectedId}`;
        }
        return this.httpService.patch(`/${url}/${AccessManagementConfig.EndPoint.Asset.getAssetDeselect}`, asset);
    }
    getAssetById(selectedAccess, selectedId) {
        let url;
        if (selectedAccess === 'user') {
            url = AccessManagementConfig.EndPoint.Asset.getUserAsset;
        }
        else if (selectedAccess === 'role') {
            url = AccessManagementConfig.EndPoint.Asset.getRoleAsset;
        }
        else {
            url = AccessManagementConfig.EndPoint.Asset.getPolicyGroupAsset;
        }
        return this.httpService.get(`${url}/${selectedId}`);
    }
    getPolicyGroupPage(policygroupid) {
        return this.httpService.get(`/policygroup/${policygroupid}${AccessManagementConfig.EndPoint.Page.getPage}`);
    }
    getDynamicPage(selectedAccess, selectedId) {
        let url;
        if (selectedAccess === 'user') {
            url = 'org/user';
        }
        else if (selectedAccess === 'role') {
            url = 'access-control/role';
        }
        else {
            url = 'platform/page-designer/policygroup';
        }
        return this.httpService.get(`/${url}/${selectedId}${AccessManagementConfig.EndPoint.Page.getPage}`);
    }
    updateDynamicPage(selectedAccess, selectedId, pageData) {
        let url;
        if (selectedAccess === 'user') {
            url = 'org/user';
        }
        else if (selectedAccess === 'role') {
            url = 'access-control/role';
        }
        else {
            url = 'platform/page-designer/policygroup';
        }
        return this.httpService.put(`/${url}/${selectedId}${AccessManagementConfig.EndPoint.Page.getPage}`, pageData);
    }
    createAccess(fieldLevelAccess, accessBy, payload, userId, roleId, policyId) {
        let url;
        const createUrl = fieldLevelAccess
            ? AccessManagementConfig.EndPoint.Asset.getAsset
            : AccessManagementConfig.EndPoint.Page.getPage;
        // check only policy group
        if (accessBy === '3') {
            url = `${AccessManagementConfig.EndPoint.PolicyGroup.getPolicyGroup}${policyId ? policyId : '0'}${createUrl}`;
        }
        // check persona with policy group
        if (accessBy === '2') {
            url = `${AccessManagementConfig.EndPoint.Role.getRole}${roleId ? roleId : '0'}${createUrl}`;
        }
        // check user, persona with policy group
        if (accessBy === '1') {
            url = `${AccessManagementConfig.EndPoint.User.getUser}${userId ? userId : '0'}${createUrl}`;
        }
        return this.httpService.post(url, payload);
    }
    getApplicationAccess() {
        return this.httpService.get('/applicationaccess/');
    }
    checkObjectType(schema, table) {
        return this.httpService.get(`${DataBaseConfig.EndPoint.Database.checkObjectType}/${schema}/${table}`);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageAccessService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageAccessService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageAccessService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1hY2Nlc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBhZ2VhY2Nlc3Mvc3JjL2xpYi9waWNzLXJiYWMtcGFnZWFjY2Vzcy9AY29yZS91cmxzL3BhZ2UtYWNjZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRXZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBS25ELE1BQU0sT0FBTyxpQkFBaUI7SUFTUjtJQVJwQixNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2YsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNiLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDZixXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLGtEQUFrRDtJQUNsRCw0QkFBNEI7SUFDNUIsSUFBSTtJQUNKLFdBQVcsQ0FBTTtJQUNqQixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNILGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRO1FBQ3JFLE1BQU0sU0FBUyxHQUFH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L2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnIH0gZnJvbSAnLi4vLi4vQGNvcmUvdXJscy9hY2Nlc3MtbWFuYWdlbWVudC11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YUJhc2VDb25maWcgfSBmcm9tICcuL3JiYWMtdXJsLmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlQWNjZXNzU2VydmljZSB7XHJcbiAgaXNmdWxsID0gZmFsc2U7XHJcbiAgaGlkZSA9IGZhbHNlO1xyXG4gIGlzcmVhZCA9IGZhbHNlO1xyXG4gIGlzcmVhZHdyaXRlID0gZmFsc2U7XHJcbiAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHtcclxuICAvLyAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsXHJcbiAgLy8gfVxyXG4gIGh0dHBTZXJ2aWNlOiBhbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UgPSByZXNbJ0hUVFBTRVJWSUNFJ11cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgLyoqXHJcbiAgICogd2hlbiB1c2VyIHNlbGVjdGVkIHBvbGljeVxyXG4gICAqIEBwYXJhbSBhY2Nlc3MgUmF3IHZhbHVyIG9mIFJCYWMgZm9ybVxyXG4gICAqIEByZXR1cm5zIGZvcm0gYXJyYXkgb2YgREFcclxuICAgKiBAY2hpbGRGdW5jdGlvbiBvZiBzYXZlUmJhY1xyXG4gICAqL1xyXG4gIGFjY2Vzc0J5UG9saWN5KGFjY2VzcywgaWQsIHBvbGljeUdyb3VwRGF0YSwgc2VsZWN0ZWRGaWVsZERhdGEsIHBhZ2VEYXRhKTogYW55W10ge1xyXG4gICAgY29uc3QgZnVsbEFycmF5ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGlkKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YSA9IHBvbGljeUdyb3VwRGF0YS5maWx0ZXIoa2V5ID0+IGtleS5pZCA9PT0gdmFsdWUpO1xyXG4gICAgICBjb25zdCBmb3JtT2JqID0ge1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgcG9saWN5Z3JvdXBuYW1lOiAnJyxcclxuICAgICAgICBwYWdlQ29uZmlnczogW10sXHJcbiAgICAgICAgYXNzZXRDb25maWdzOiBbXVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnNldFBvbGljeU9iaihmb3JtT2JqLCBzZWxlY3RlZERhdGEsIHZhbHVlKTtcclxuICAgICAgdGhpcy5sb2FkQWNjZXNzRm9yUGFnZShhY2Nlc3MsIHNlbGVjdGVkRGF0YSwgZm9ybU9iaiwgdmFsdWUsIHBhZ2VEYXRhKTtcclxuICAgICAgaWYgKGFjY2Vzcy5maWVsZExldmVsRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmxvYWRBY2Nlc3NGb3JGaWVsZHMoYWNjZXNzLCBzZWxlY3RlZERhdGEsIGZvcm1PYmosIHZhbHVlLCBzZWxlY3RlZEZpZWxkRGF0YSwgcGFnZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bGxBcnJheS5wdXNoKGZvcm1PYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdWxsQXJyYXk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB3aGVuIHVzZXIgc2VsZWN0ZWQgUGVyc29uYVxyXG4gICAqIEBwYXJhbSBhY2Nlc3MgUmF3IHZhbHVyIG9mIFJCYWMgZm9ybVxyXG4gICAqIEByZXR1cm5zIGZvcm0gYXJyYXkgb2YgREFcclxuICAgKiBAY2hpbGRGdW5jdGlvbiBvZiBzYXZlUmJhY1xyXG4gICAqL1xyXG4gIGFjY2Vzc0J5UGVyc29uYShhY2Nlc3MsIHBlcnNvbmFJZCwgaWQsIHJvbGVBZGRlZERhdGEsIHNlbGVjdGVkRmllbGREYXRhLCBwYWdlRGF0YSkge1xyXG4gICAgY29uc3QgZnVsbEFycmF5ID0gW107XHJcbiAgICAvLyBjb25zdCBwZXJzb25hSWQgPSB0aGlzLnJiYWNGb3JtLmdldCgncm9sZWlkJykudmFsdWU7XHJcbiAgICAvLyBjb25zdCBwZXJzb25hSWQgPSB0aGlzLnJiYWNGb3JtLmdldCgncm9sZWlkJykudmFsdWU7XHJcbiAgICBjb25zdCBmb3JtT2JqID0ge1xyXG4gICAgICBpZDogJycsXHJcbiAgICAgIHJvbGVrZXk6ICcnLFxyXG4gICAgICByb2xlbmFtZTogJycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgZWZmZWN0aXZlZGF0ZTogJycsXHJcbiAgICAgIHBhZ2VDb25maWdzOiBbXSxcclxuICAgICAgYXNzZXRDb25maWdzOiBbXSxcclxuICAgICAgcm9sZVBvbGljeUdyb3VwQ29uZmlnczogW11cclxuICAgIH07XHJcblxyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHBlcnNvbmFJZCkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZERhdGEgPSByb2xlQWRkZWREYXRhLmZpbHRlcihrZXkgPT4ga2V5LmlkID09PSBpdGVtKTtcclxuICAgICAgdGhpcy5zZXRSb2xlT2JqKGZvcm1PYmosIHNlbGVjdGVkRGF0YSwgaXRlbSwgaWQpO1xyXG4gICAgICB0aGlzLmxvYWRBY2Nlc3NGb3JQYWdlKGFjY2Vzcywgc2VsZWN0ZWREYXRhLCBmb3JtT2JqLCBpdGVtLCBwYWdlRGF0YSk7XHJcbiAgICAgIGlmIChhY2Nlc3MuZmllbGRMZXZlbERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkQWNjZXNzRm9yRmllbGRzKGFjY2Vzcywgc2VsZWN0ZWREYXRhLCBmb3JtT2JqLCBpdGVtLCBzZWxlY3RlZEZpZWxkRGF0YSwgcGFnZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bGxBcnJheS5wdXNoKGZvcm1PYmopO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bGxBcnJheTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHdoZW4gdXNlciBzZWxlY3RlZCBVc2VyXHJcbiAgICogQHBhcmFtIGFjY2VzcyBSYXcgdmFsdXIgb2YgUkJhYyBmb3JtXHJcbiAgICogQHJldHVybnMgZm9ybSBhcnJheSBvZiBEQVxyXG4gICAqIEBjaGlsZEZ1bmN0aW9uIG9mIHNhdmVSYmFjXHJcbiAgICovXHJcbiAgYWNjZXNzQnlVc2VyKGFjY2VzcywgdXNlcklkLCBpZCwgcm9sZWlkcywgdXNlckxpc3QsIHNlbGVjdGVkRmllbGREYXRhLCBwYWdlRGF0YSkge1xyXG4gICAgY29uc3QgZnVsbEFycmF5ID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHVzZXJJZCkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZERhdGEgPSB1c2VyTGlzdC5maWx0ZXIoa2V5ID0+IGtleS5pZCA9PT0gaXRlbSk7XHJcbiAgICAgIGNvbnN0IGZvcm1PYmogPSB7IC4uLnNlbGVjdGVkRGF0YVswXSB9O1xyXG4gICAgICBmb3JtT2JqLnBhZ2VDb25maWdzID0gW107XHJcbiAgICAgIGZvcm1PYmouYXNzZXRDb25maWdzID0gW107XHJcbiAgICAgIGZvcm1PYmoucG9saWN5R3JvdXBDb25maWdzID0gW107XHJcbiAgICAgIGZvcm1PYmoucm9sZUNvbmZpZ3MgPSBbXTtcclxuICAgICAgY29uc29sZS5sb2coJz09PT09PScpO1xyXG4gICAgICB0aGlzLnNldFVzZXJPYmooZm9ybU9iaiwgc2VsZWN0ZWREYXRhLCBpdGVtLCBpZCwgcm9sZWlkcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT09PT0xJyk7XHJcbiAgICAgIHRoaXMubG9hZEFjY2Vzc0ZvclBhZ2UoYWNjZXNzLCBzZWxlY3RlZERhdGEsIGZvcm1PYmosIGl0ZW0sIHBhZ2VEYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coJz09PT09PTInKTtcclxuICAgICAgaWYgKGFjY2Vzcy5maWVsZExldmVsRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmxvYWRBY2Nlc3NGb3JGaWVsZHMoYWNjZXNzLCBzZWxlY3RlZERhdGEsIGZvcm1PYmosIGl0ZW0sIHNlbGVjdGVkRmllbGREYXRhLCBwYWdlRGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgZnVsbEFycmF5LnB1c2goZm9ybU9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZ1bGxBcnJheTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIGFjY2VzcyBsaXN0IGZvciBkYXNoYm9hcmQgYWNjZXNzXHJcbiAgICogQHBhcmFtIGFjY2Vzc1xyXG4gICAqIEBwYXJhbSBhc3NldERhc2hCb2FyZENvbmZpZ3NcclxuICAgKiBAcGFyYW0gZm9ybU9ialxyXG4gICAqIEBwYXJhbSBpZFxyXG4gICAqL1xyXG4gIGxvYWRBY2Nlc3NGb3JQYWdlKGFjY2Vzcywgc2VsZWN0ZWREYXRhLCBmb3JtT2JqLCBpZCwgcGFnZURhdGEpIHtcclxuICAgIGNvbnN0IGV4aXN0UGFnZUNvbmZpZ3MgPSBzZWxlY3RlZERhdGFbMF1bJ3BhZ2VDb25maWdzJ107XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYWNjZXNzLnBhZ2VMZXZlbERhdGEpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRNb2R1bGUgPSBwYWdlRGF0YS5maWx0ZXIoa2V5ID0+IGtleS5pZCA9PT0gaXRlbVsncGFnZWlkJ10pO1xyXG4gICAgICBjb25zdCBwYWdlQWNjZXNzID0gYWNjZXNzLnBhZ2VMZXZlbERhdGEuZmlsdGVyKGtleSA9PiBrZXkucGFnZWlkID09PSBpdGVtWydwYWdlaWQnXSk7XHJcbiAgICAgIHRoaXMucGFnZUFjY2Vzc0NoZWNrKHBhZ2VBY2Nlc3MpO1xyXG4gICAgICBjb25zdCBwYWdlS2V5ID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIGlzYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgIGlzZnVsbDogdGhpcy5pc2Z1bGwsXHJcbiAgICAgICAgaGlkZTogdGhpcy5oaWRlLFxyXG4gICAgICAgIGlzcmVhZDogdGhpcy5pc3JlYWQsXHJcbiAgICAgICAgaXNyZWFkd3JpdGU6IHRoaXMuaXNyZWFkd3JpdGUsXHJcbiAgICAgICAgcGFnZWlkOiBpdGVtWydwYWdlaWQnXSxcclxuICAgICAgICBwb2xpY3lncm91cGlkOiBpZCxcclxuICAgICAgICBtb2R1bGVrZXk6IHNlbGVjdGVkTW9kdWxlWzBdWydtb2R1bGVrZXknXSxcclxuICAgICAgICBzdWJtb2R1bGVrZXk6IHNlbGVjdGVkTW9kdWxlWzBdWydzdWJtb2R1bGVrZXknXVxyXG4gICAgICB9O1xyXG4gICAgICAvLyBjaGVjayBleGlzdCBwYWdlIGxlbmd0aFxyXG4gICAgICBpZiAoZXhpc3RQYWdlQ29uZmlncy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBleGlzdElkcyA9IGV4aXN0UGFnZUNvbmZpZ3MubWFwKHAgPT4gcC5wYWdlaWQpO1xyXG4gICAgICAgIGNvbnN0IGNoa1BhZ2UgPSBleGlzdElkcy5pbmNsdWRlcyhpdGVtWydwYWdlaWQnXSk7XHJcbiAgICAgICAgaWYgKGNoa1BhZ2UpIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gZXhpc3RJZHMuaW5kZXhPZihpdGVtWydwYWdlaWQnXSk7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAvL2lmIGZvdW5kXHJcbiAgICAgICAgICAgIHBhZ2VLZXkuaWQgPSBleGlzdFBhZ2VDb25maWdzW2luZGV4XVsnaWQnXTtcclxuICAgICAgICAgICAgcGFnZUtleS5pc2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3JtT2JqLnBhZ2VDb25maWdzLnB1c2gocGFnZUtleSk7XHJcbiAgICAgICAgICAgIGV4aXN0UGFnZUNvbmZpZ3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZCA9IHsgLi4ucGFnZUtleSB9O1xyXG4gICAgICAgIGQuaWQgPSBudWxsO1xyXG4gICAgICAgIGQuaXNhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGZvcm1PYmoucGFnZUNvbmZpZ3MucHVzaChkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3JtT2JqLnBhZ2VDb25maWdzLnB1c2gocGFnZUtleSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHN0aWxsIGV4aXN0Y29uZmlnIGxlbmd0aFxyXG4gICAgaWYgKGV4aXN0UGFnZUNvbmZpZ3MubGVuZ3RoKSB7XHJcbiAgICAgIGV4aXN0UGFnZUNvbmZpZ3MubWFwKHQgPT4ge1xyXG4gICAgICAgIHQuaXNhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBmb3JtT2JqLnBhZ2VDb25maWdzLnB1c2godCk7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwYWdlQWNjZXNzQ2hlY2socGFnZUFjY2Vzcykge1xyXG4gICAgaWYgKHBhZ2VBY2Nlc3NbMF0ucGFnZUFjY2VzcyA9PT0gJzEnKSB7XHJcbiAgICAgIHRoaXMuaXNmdWxsID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAocGFnZUFjY2Vzc1swXS5wYWdlQWNjZXNzID09PSAnNCcpIHtcclxuICAgICAgdGhpcy5oaWRlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAocGFnZUFjY2Vzc1swXS5wYWdlQWNjZXNzID09PSAnMycpIHtcclxuICAgICAgdGhpcy5pc3JlYWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChwYWdlQWNjZXNzWzBdLnBhZ2VBY2Nlc3MgPT09ICcyJykge1xyXG4gICAgICB0aGlzLmlzcmVhZHdyaXRlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0UG9saWN5T2JqKGZvcm1PYmosIHNlbGVjdGVkRGF0YSwgaWQpIHtcclxuICAgIGZvcm1PYmouaWQgPSBpZDtcclxuICAgIGZvcm1PYmouZGVzY3JpcHRpb24gPSBzZWxlY3RlZERhdGFbMF1bJ2Rlc2NyaXB0aW9uJ107XHJcbiAgICBmb3JtT2JqLnBvbGljeWdyb3VwbmFtZSA9IHNlbGVjdGVkRGF0YVswXVsncG9saWN5Z3JvdXBuYW1lJ107XHJcbiAgfVxyXG5cclxuICBsb2FkQWNjZXNzRm9yRmllbGRzKGFjY2Vzcywgc2VsZWN0ZWREYXRhLCBmb3JtT2JqLCBpZCwgc2VsZWN0ZWRGaWVsZERhdGEsIHBhZ2VEYXRhKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZERhdGEpXHJcbiAgICBjb25zdCBhc3NldENvbmZpZ3MgPSBzZWxlY3RlZERhdGFbMF1bJ2Fzc2V0Q29uZmlncyddLmZpbHRlcihrZXkgPT4ga2V5Lm1vZHVsZWtleSAhPT0gbnVsbCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tJylcclxuICAgIGNvbnN0IHNlbGVjdGVkTW9kdWxlID0gcGFnZURhdGEuZmlsdGVyKGtleSA9PiBrZXkuaWQgPT09IGFjY2Vzcy5mcGFnZXNbMF1bJ2lkJ10pO1xyXG4gICAgLy8gY29uc29sZS5sb2coYWNjZXNzLmZpZWxkTGV2ZWxEYXRhKVxyXG4gICAgc2VsZWN0ZWRGaWVsZERhdGEgPVxyXG4gICAgICBhY2Nlc3MuZmllbGRMZXZlbERhdGEgIT09IG51bGwgPyB0aGlzLnNldFNlbGVjdGVkRmllbGRQYWdlKGFjY2Vzcy5maWVsZExldmVsRGF0YSwgc2VsZWN0ZWRGaWVsZERhdGEpIDogW107XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZERhdGEsIGFzc2V0Q29uZmlncylcclxuICAgIGZvciAoY29uc3Qgc2VsZWN0ZWRGaWVsZCBvZiBzZWxlY3RlZEZpZWxkRGF0YSkge1xyXG4gICAgICBpZiAoc2VsZWN0ZWRGaWVsZC5hY2Nlc3MgPT09IG51bGwpIHtcclxuICAgICAgICAvLyBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEZpZWxkKTtcclxuICAgICAgbGV0IGlzZnVsbCA9IGZhbHNlO1xyXG4gICAgICBsZXQgaGlkZSA9IGZhbHNlO1xyXG4gICAgICBsZXQgaXNyZWFkID0gZmFsc2U7XHJcbiAgICAgIGxldCBpc3JlYWR3cml0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHNlbGVjdGVkRmllbGQuYWNjZXNzID09PSAnMicgfHwgc2VsZWN0ZWRGaWVsZC5hY2Nlc3MgPT09ICcxJykge1xyXG4gICAgICAgIGlzZnVsbCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRGaWVsZC5hY2Nlc3MgPT09ICc0Jykge1xyXG4gICAgICAgIGhpZGUgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkRmllbGQuYWNjZXNzID09PSAnMycpIHtcclxuICAgICAgICBpc3JlYWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkRmllbGQuYWNjZXNzID09PSAnMicpIHtcclxuICAgICAgICBpc3JlYWR3cml0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYUNvbmZpZ3MgPSB7XHJcbiAgICAgICAgaWQ6IHNlbGVjdGVkRmllbGRbJ2lkJ10gPyBzZWxlY3RlZEZpZWxkWydpZCddIDogbnVsbCxcclxuICAgICAgICBpc2FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICBpc2Z1bGw6IGlzZnVsbCxcclxuICAgICAgICBoaWRlOiBoaWRlLFxyXG4gICAgICAgIGlzcmVhZDogaXNyZWFkLFxyXG4gICAgICAgIGlzcmVhZHdyaXRlOiBpc3JlYWR3cml0ZSxcclxuICAgICAgICBhc3NldGlkOiBzZWxlY3RlZEZpZWxkWydhc3NldGlkJ10sXHJcbiAgICAgICAgcG9saWN5Z3JvdXBpZDogaWQsXHJcbiAgICAgICAgcGFnZWlkOiBzZWxlY3RlZEZpZWxkWydwYWdlSWQnXSA/IHNlbGVjdGVkRmllbGRbJ3BhZ2VJZCddIDogYWNjZXNzLmZwYWdlc1swXVsnaWQnXSxcclxuICAgICAgICBtb2R1bGVrZXk6IHNlbGVjdGVkTW9kdWxlWzBdWydtb2R1bGVrZXknXSxcclxuICAgICAgICBzdWJtb2R1bGVrZXk6IHNlbGVjdGVkTW9kdWxlWzBdWydzdWJtb2R1bGVrZXknXVxyXG4gICAgICB9O1xyXG4gICAgICAvLyBjaGVjayBleGlzdCBwYWdlIGxlbmd0aFxyXG4gICAgICB0aGlzLmNoZWNrRXhpc3RBc3NldChhc3NldENvbmZpZ3MsIHNlbGVjdGVkRmllbGQsIGFDb25maWdzLCBmb3JtT2JqKTtcclxuICAgIH1cclxuICB9XHJcbiAgY2hlY2tFeGlzdEFzc2V0KGFzc2V0Q29uZmlncywgc2VsZWN0ZWRGaWVsZCwgYUNvbmZpZ3MsIGZvcm1PYmopIHtcclxuICAgIGlmIChhc3NldENvbmZpZ3MubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0SWRzID0gYXNzZXRDb25maWdzLm1hcChwID0+IHAuYXNzZXRpZCk7XHJcbiAgICAgIGNvbnN0IGNoa1BhZ2UgPSBleGlzdElkcy5pbmNsdWRlcyhzZWxlY3RlZEZpZWxkWydhc3NldGlkJ10pO1xyXG4gICAgICBpZiAoY2hrUGFnZSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZXhpc3RJZHMuaW5kZXhPZihzZWxlY3RlZEZpZWxkWydhc3NldGlkJ10pO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAvL2lmIGZvdW5kXHJcbiAgICAgICAgICBhQ29uZmlncy5pZCA9IGFzc2V0Q29uZmlnc1tpbmRleF1bJ2lkJ107XHJcbiAgICAgICAgICBhQ29uZmlncy5pc2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgZm9ybU9iai5hc3NldENvbmZpZ3MucHVzaChhQ29uZmlncyk7XHJcbiAgICAgICAgICBhc3NldENvbmZpZ3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZCA9IHsgLi4uYUNvbmZpZ3MgfTtcclxuICAgICAgZC5pc2FjdGl2ZSA9IHRydWU7XHJcbiAgICAgIGQuaWQgPSBudWxsO1xyXG4gICAgICBmb3JtT2JqLmFzc2V0Q29uZmlncy5wdXNoKGQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9ybU9iai5hc3NldENvbmZpZ3MucHVzaChhQ29uZmlncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRSb2xlT2JqKGZvcm1PYmosIHNlbGVjdGVkRGF0YSwgcm9sZWlkLCBwb2xpY3lpZCkge1xyXG4gICAgZm9ybU9iai5pZCA9IHJvbGVpZDtcclxuICAgIGZvcm1PYmoucm9sZWtleSA9IHNlbGVjdGVkRGF0YVswXVsncm9sZWtleSddO1xyXG4gICAgZm9ybU9iai5yb2xlbmFtZSA9IHNlbGVjdGVkRGF0YVswXVsncm9sZW5hbWUnXTtcclxuICAgIGZvcm1PYmouZWZmZWN0aXZlZGF0ZSA9IHNlbGVjdGVkRGF0YVswXVsnZWZmZWN0aXZlZGF0ZSddO1xyXG4gICAgZm9ybU9iai5kZXNjcmlwdGlvbiA9IHNlbGVjdGVkRGF0YVswXVsnZGVzY3JpcHRpb24nXTtcclxuICAgIC8vIGxvb3AgdGhlIHBvbGljeSBncm91cFxyXG4gICAgY29uc3QgaWQgPSBwb2xpY3lpZDtcclxuICAgIGNvbnN0IGV4aXN0Um9sZVBvbGljeUNvbmZpZyA9IHNlbGVjdGVkRGF0YVswXVsncm9sZVBvbGljeUdyb3VwQ29uZmlncyddO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGlkKSB7XHJcbiAgICAgIGNvbnN0IHJwb2xpY3lDb25maWcgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgaXNhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgcG9saWN5Z3JvdXBpZDogaXRlbSwgLy8gZ3JvdXAgcG9saWN5IGlkXHJcbiAgICAgICAgcm9sZWlkOiByb2xlaWQgLy8gcm9sZSBpZFxyXG4gICAgICB9O1xyXG4gICAgICAvLyBjaGVjayBleGlzdCBwYWdlIGxlbmd0aFxyXG4gICAgICBpZiAoZXhpc3RSb2xlUG9saWN5Q29uZmlnLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0SWRzID0gZXhpc3RSb2xlUG9saWN5Q29uZmlnLm1hcChwID0+IHAucG9saWN5Z3JvdXBpZCk7XHJcbiAgICAgICAgY29uc3QgY2hrUGFnZSA9IGV4aXN0SWRzLmluY2x1ZGVzKGl0ZW0pO1xyXG4gICAgICAgIGlmIChjaGtQYWdlKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGV4aXN0SWRzLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAvL2lmIGZvdW5kXHJcbiAgICAgICAgICAgIHJwb2xpY3lDb25maWcuaWQgPSBleGlzdFJvbGVQb2xpY3lDb25maWdbaW5kZXhdWydpZCddO1xyXG4gICAgICAgICAgICBleGlzdFJvbGVQb2xpY3lDb25maWcuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9ybU9iai5yb2xlUG9saWN5R3JvdXBDb25maWdzLnB1c2gocnBvbGljeUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICAvLyBzdGlsbCBleGlzdGNvbmZpZyBsZW5ndGhcclxuICAgIGlmIChleGlzdFJvbGVQb2xpY3lDb25maWcubGVuZ3RoKSB7XHJcbiAgICAgIGV4aXN0Um9sZVBvbGljeUNvbmZpZy5tYXAodCA9PiB7XHJcbiAgICAgICAgdC5pc2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGZvcm1PYmoucm9sZVBvbGljeUdyb3VwQ29uZmlncy5wdXNoKHQpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFVzZXJPYmooZm9ybU9iaiwgc2VsZWN0ZWREYXRhLCB1c2VySWQsIGlkLCByb2xlaWRzKSB7XHJcbiAgICAvLyBsb29wIHRoZSBwb2xpY3kgZ3JvdXBcclxuICAgIGNvbnN0IGV4aXN0Um9sZVBvbGljeUNvbmZpZyA9IHNlbGVjdGVkRGF0YVswXVsncG9saWN5R3JvdXBDb25maWdzJ107XHJcbiAgICB0aGlzLmdldENoZWNrUG9saWN5Q29uZmlnKGlkLCB1c2VySWQsIGV4aXN0Um9sZVBvbGljeUNvbmZpZywgZm9ybU9iaik7XHJcbiAgICAvLyBzdGlsbCBleGlzdGNvbmZpZyBsZW5ndGhcclxuICAgIGlmIChleGlzdFJvbGVQb2xpY3lDb25maWcubGVuZ3RoKSB7XHJcbiAgICAgIGV4aXN0Um9sZVBvbGljeUNvbmZpZy5tYXAodCA9PiB7XHJcbiAgICAgICAgdC5pc2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGZvcm1PYmoucG9saWN5R3JvdXBDb25maWdzLnB1c2godCk7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gbG9vcCB0aGUgcm9sZSBncm91cFxyXG4gICAgLy8gY29uc3Qgcm9sZWlkcyA9IHRoaXMucmJhY0Zvcm0uZ2V0KCdyb2xlaWQnKS52YWx1ZTtcclxuICAgIGNvbnN0IGV4aXN0Um9sZUlkID0gc2VsZWN0ZWREYXRhWzBdWydyb2xlQ29uZmlncyddO1xyXG4gICAgZm9yIChjb25zdCByb2xlIG9mIGV4aXN0Um9sZUlkKSB7XHJcbiAgICAgIGNvbnN0IGNoa1JvbGVEYXRhID0gcm9sZWlkcy5pbmNsdWRlcyhyb2xlWydyb2xlaWQnXSk7XHJcbiAgICAgIGNvbnN0IHJvbGVHcnAgPSB7XHJcbiAgICAgICAgaWQ6IHJvbGVbJ2lkJ10sXHJcbiAgICAgICAgaXNhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIGlzZGVmYXVsdHJvbGU6IHJvbGVbJ2lzZGVmYXVsdHJvbGUnXSxcclxuICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcclxuICAgICAgICByb2xlaWQ6IHJvbGVbJ3JvbGVpZCddLFxyXG4gICAgICAgIGVmZmVjdGl2ZWRhdGU6IHJvbGVbJ2VmZmVjdGl2ZWRhdGUnXVxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoY2hrUm9sZURhdGEpIHtcclxuICAgICAgICBjb25zdCBpbmRleDEgPSByb2xlaWRzLmluZGV4T2Yocm9sZVsncm9sZWlkJ10pO1xyXG4gICAgICAgIGlmIChpbmRleDEgPiAtMSkge1xyXG4gICAgICAgICAgLy9pZiBmb3VuZFxyXG4gICAgICAgICAgcm9sZWlkcy5zcGxpY2UoaW5kZXgxLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm9sZUdycC5pc2FjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybU9iai5yb2xlQ29uZmlncy5wdXNoKHJvbGVHcnApO1xyXG4gICAgfVxyXG4gICAgLy8gY2hlY2sgbmV3IHJvbGVzIGdyb3VwIGlkc1xyXG4gICAgaWYgKHJvbGVpZHMubGVuZ3RoKSB7XHJcbiAgICAgIGZvciAoY29uc3Qgcm9sZUlkIG9mIHJvbGVpZHMpIHtcclxuICAgICAgICBjb25zdCByb2xlR3JwID0ge1xyXG4gICAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgICBpc2FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgIGlzZGVmYXVsdHJvbGU6IGZhbHNlLFxyXG4gICAgICAgICAgdXNlcmlkOiB1c2VySWQsXHJcbiAgICAgICAgICByb2xlaWQ6IHJvbGVJZCxcclxuICAgICAgICAgIGVmZmVjdGl2ZWRhdGU6IG5ldyBEYXRlKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvcm1PYmoucm9sZUNvbmZpZ3MucHVzaChyb2xlR3JwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBnZXRDaGVja1BvbGljeUNvbmZpZyhpZCwgdXNlcklkLCBleGlzdFJvbGVQb2xpY3lDb25maWcsIGZvcm1PYmopIHtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpZCkge1xyXG4gICAgICBjb25zdCBycG9saWN5Q29uZmlnID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIGlzYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgIHBvbGljeWdyb3VwaWQ6IGl0ZW0sIC8vIGdyb3VwIHBvbGljeSBpZFxyXG4gICAgICAgIHVzZXJpZDogdXNlcklkIC8vIHVzZXIgaWRcclxuICAgICAgfTtcclxuICAgICAgLy8gY2hlY2sgZXhpc3QgcGFnZSBsZW5ndGhcclxuICAgICAgaWYgKGV4aXN0Um9sZVBvbGljeUNvbmZpZy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBleGlzdElkcyA9IGV4aXN0Um9sZVBvbGljeUNvbmZpZy5tYXAocCA9PiBwLnBvbGljeWdyb3VwaWQpO1xyXG4gICAgICAgIGNvbnN0IGNoa1BhZ2UgPSBleGlzdElkcy5pbmNsdWRlcyhpdGVtKTtcclxuICAgICAgICBpZiAoY2hrUGFnZSkge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBleGlzdElkcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgLy9pZiBmb3VuZFxyXG4gICAgICAgICAgICBycG9saWN5Q29uZmlnLmlkID0gZXhpc3RSb2xlUG9saWN5Q29uZmlnW2luZGV4XVsnaWQnXTtcclxuICAgICAgICAgICAgZXhpc3RSb2xlUG9saWN5Q29uZmlnLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvcm1PYmoucG9saWN5R3JvdXBDb25maWdzLnB1c2gocnBvbGljeUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldFNlbGVjdGVkRmllbGRQYWdlKHVwZGF0ZUFycmF5LCBzZWxlY3RlZEZpZWxkRGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJz09PT09PT09PT4nLCB1cGRhdGVBcnJheSwgc2VsZWN0ZWRGaWVsZERhdGEpXHJcbiAgICBpZiAodXBkYXRlQXJyYXk/Lmxlbmd0aCkge1xyXG4gICAgICBpZiAoc2VsZWN0ZWRGaWVsZERhdGE/Lmxlbmd0aCA+PSB1cGRhdGVBcnJheS5sZW5ndGgpIHtcclxuICAgICAgICBzZWxlY3RlZEZpZWxkRGF0YSA9IHRoaXMudXBkYXRlRHVwbGljYXRlc2luQXJyYXkoWy4uLnNlbGVjdGVkRmllbGREYXRhXSwgWy4uLnVwZGF0ZUFycmF5XSk7XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkRmllbGREYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGVjdGVkRmllbGREYXRhID0gWy4uLnVwZGF0ZUFycmF5XTtcclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRGaWVsZERhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgdXBkYXRlRHVwbGljYXRlc2luQXJyYXkob3JpZ0FycjogYW55W10sIHVwZGF0aW5nQXJyOiBhbnlbXSk6IGFueVtdIHtcclxuICAgIGNvbnN0IHVwZGF0aW5nQXJyaWRzID0gbmV3IFNldCh1cGRhdGluZ0Fyci5tYXAoZWxlID0+IGVsZS5hc3NldGlkKSk7XHJcbiAgICByZXR1cm4gWy4uLnVwZGF0aW5nQXJyLCAuLi5vcmlnQXJyLmZpbHRlcihlbGUgPT4gIXVwZGF0aW5nQXJyaWRzLmhhcyhlbGUuYXNzZXRpZCkpXTtcclxuICB9XHJcbiAgZ2V0TW9zdEZyZXF1ZW50RWxlKGFycikge1xyXG4gICAgY29uc3QgaGFzaE1hcCA9IGFyci5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XHJcbiAgICAgIGFjY1tTdHJpbmcodmFsKV0gPSAoYWNjW3ZhbF0gfHwgMCkgKyAxO1xyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30pO1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGhhc2hNYXApLnJlZHVjZSgoYSwgYikgPT4gKGhhc2hNYXBbYV0gPiBoYXNoTWFwW2JdID8gYSA6IGIpKTtcclxuICB9XHJcbiAgZ2V0QWNjZXNzQXJyYXlPbkNsaWNrKHBhZ2VzRnJvbUZpZWxkLCBwYWdlRGF0YSwgc2VsZWN0ZWRGaWVsZERhdGEsIHNhdmVkUGFnZUFjY2Vzc1BhdGNoaW5nLCBleGlzdGluZ1ZhbHVlKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NBcnJheTogYW55ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VzRnJvbUZpZWxkPy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwYWdlTmFtZSA9IHBhZ2VEYXRhLmZpbHRlcihrZXkgPT4ga2V5LmlkID09PSBwYWdlc0Zyb21GaWVsZFtpXSk7XHJcbiAgICAgIGNvbnN0IGZpZWxkTGV2ZWxFeGlzdCA9IHNlbGVjdGVkRmllbGREYXRhLmZpbHRlcihlbGUgPT4gZWxlLnBhZ2VJZCA9PSBwYWdlc0Zyb21GaWVsZFtpXSk7XHJcbiAgICAgIGNvbnN0IHBhZ2VBY2Nlc3NWYWx1ZSA9IHRoaXMuY2hlY2tGaWVsZExldmVsRXhpc3QoXHJcbiAgICAgICAgZmllbGRMZXZlbEV4aXN0LFxyXG4gICAgICAgIHNhdmVkUGFnZUFjY2Vzc1BhdGNoaW5nLFxyXG4gICAgICAgIHBhZ2VzRnJvbUZpZWxkLFxyXG4gICAgICAgIGV4aXN0aW5nVmFsdWUsXHJcbiAgICAgICAgaVxyXG4gICAgICApO1xyXG4gICAgICBpZiAoIWV4aXN0aW5nVmFsdWVbaV0pIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVWZXJzaW9uID0gcGFnZU5hbWVbMF0/LmFjdGl2ZVZlcnNpb247XHJcbiAgICAgICAgbGV0IHRhYmxlU2NoZW1hQ29uZmlnID0gYWN0aXZlVmVyc2lvbj8udGFibGVzY2hlbWFjb25maWc7XHJcbiAgICAgICAgdGFibGVTY2hlbWFDb25maWcgPSB0YWJsZVNjaGVtYUNvbmZpZztcclxuICAgICAgICBjb25zdCBvYmplY3RUeXBlID0gdGFibGVTY2hlbWFDb25maWc/Lm9iamVjdFR5cGUgPyB0YWJsZVNjaGVtYUNvbmZpZy5vYmplY3RUeXBlIDogJ3RhYmxlJztcclxuICAgICAgICBpZiAob2JqZWN0VHlwZSA9PT0gJ3ZpZXcnKSB7XHJcbiAgICAgICAgICBhY2Nlc3NBcnJheS5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICAgICAgICBwYWdlTmFtZTogbmV3IEZvcm1Db250cm9sKHBhZ2VOYW1lWzBdPy5wYWdlbmFtZSksXHJcbiAgICAgICAgICAgICAgcGFnZWlkOiBuZXcgRm9ybUNvbnRyb2wocGFnZXNGcm9tRmllbGRbaV0pLFxyXG4gICAgICAgICAgICAgIC8vIHBhZ2VBY2Nlc3M6IG5ldyBGb3JtQ29udHJvbCgnMycpLFxyXG4gICAgICAgICAgICAgIHBhZ2VBY2Nlc3NDcmVhdGU6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcbiAgICAgICAgICAgICAgcGFnZUFjY2Vzc1JlYWQ6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuICAgICAgICAgICAgICBwYWdlQWNjZXNzVXBkYXRlOiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG4gICAgICAgICAgICAgIHBhZ2VBY2Nlc3NEZWxldGU6IG5ldyBGb3JtQ29udHJvbCh7IHZhbHVlOiBmYWxzZSwgZGlzYWJsZWQ6IHBhZ2VOYW1lWzBdPy5hY3RpdmVWZXJzaW9uPy50ZW1wbGF0ZWpzb24gfSksXHJcbiAgICAgICAgICAgICAgcGFnZUFjY2Vzc05vbmU6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcbiAgICAgICAgICAgICAgdmFsaWRpdHk6IG5ldyBGb3JtQ29udHJvbCgnMCcpLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjogbmV3IEZvcm1Db250cm9sKCdhbHdheXMnKSxcclxuICAgICAgICAgICAgICBmYWxsYmFja1RvOiBuZXcgRm9ybUNvbnRyb2woJ24nKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWNjZXNzQXJyYXkucHVzaChcclxuICAgICAgICAgICAgbmV3IEZvcm1Hcm91cCh7XHJcbiAgICAgICAgICAgICAgcGFnZU5hbWU6IG5ldyBGb3JtQ29udHJvbChwYWdlTmFtZVswXT8ucGFnZW5hbWUpLFxyXG4gICAgICAgICAgICAgIHBhZ2VpZDogbmV3IEZvcm1Db250cm9sKHBhZ2VzRnJvbUZpZWxkW2ldKSxcclxuICAgICAgICAgICAgICAvLyBwYWdlQWNjZXNzOiBuZXcgRm9ybUNvbnRyb2wocGFnZUFjY2Vzc1ZhbHVlID8gcGFnZUFjY2Vzc1ZhbHVlIDogJzInKSxcclxuICAgICAgICAgICAgICBwYWdlQWNjZXNzQ3JlYXRlOiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG4gICAgICAgICAgICAgIHBhZ2VBY2Nlc3NSZWFkOiBuZXcgRm9ybUNvbnRyb2wodHJ1ZSksXHJcbiAgICAgICAgICAgICAgcGFnZUFjY2Vzc1VwZGF0ZTogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcclxuICAgICAgICAgICAgICBwYWdlQWNjZXNzRGVsZXRlOiBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogZmFsc2UsIGRpc2FibGVkOiBwYWdlTmFtZVswXT8uYWN0aXZlVmVyc2lvbj8udGVtcGxhdGVqc29uIH0pLFxyXG4gICAgICAgICAgICAgIHBhZ2VBY2Nlc3NOb25lOiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG4gICAgICAgICAgICAgIHZhbGlkaXR5OiBuZXcgRm9ybUNvbnRyb2woJzAnKSxcclxuICAgICAgICAgICAgICBjb25kaXRpb246IG5ldyBGb3JtQ29udHJvbCgnYWx3YXlzJyksXHJcbiAgICAgICAgICAgICAgZmFsbGJhY2tUbzogbmV3IEZvcm1Db250cm9sKCduJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFjY2Vzc0FycmF5LnB1c2goXHJcbiAgICAgICAgICBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICAgICAgcGFnZU5hbWU6IG5ldyBGb3JtQ29udHJvbChwYWdlTmFtZVswXT8ucGFnZW5hbWUpLFxyXG4gICAgICAgICAgICBwYWdlaWQ6IG5ldyBGb3JtQ29udHJvbChwYWdlc0Zyb21GaWVsZFtpXSksXHJcbiAgICAgICAgICAgIC8vIHBhZ2VBY2Nlc3M6IG5ldyBGb3JtQ29udHJvbChwYWdlQWNjZXNzVmFsdWUgPyBwYWdlQWNjZXNzVmFsdWUgOiAnMicpLFxyXG4gICAgICAgICAgICBwYWdlQWNjZXNzQ3JlYXRlOiBuZXcgRm9ybUNvbnRyb2wocGFnZUFjY2Vzc1ZhbHVlPy5wYWdlQWNjZXNzQ3JlYXRlIHx8IGZhbHNlKSxcclxuICAgICAgICAgICAgcGFnZUFjY2Vzc1JlYWQ6IG5ldyBGb3JtQ29udHJvbCh0aGlzLmdldFBhZ2VSZWFkQWNjZXNzKHBhZ2VBY2Nlc3NWYWx1ZSkpLFxyXG4gICAgICAgICAgICBwYWdlQWNjZXNzVXBkYXRlOiBuZXcgRm9ybUNvbnRyb2wocGFnZUFjY2Vzc1ZhbHVlPy5wYWdlQWNjZXNzVXBkYXRlIHx8IGZhbHNlKSxcclxuICAgICAgICAgICAgcGFnZUFjY2Vzc0RlbGV0ZTogbmV3IEZvcm1Db250cm9sKHsgdmFsdWU6IHBhZ2VBY2Nlc3NWYWx1ZT8ucGFnZUFjY2Vzc0RlbGV0ZSB8fCBmYWxzZSwgZGlzYWJsZWQ6IHBhZ2VOYW1lWzBdPy5hY3RpdmVWZXJzaW9uPy50ZW1wbGF0ZWpzb24gfSksXHJcbiAgICAgICAgICAgIHBhZ2VBY2Nlc3NOb25lOiBuZXcgRm9ybUNvbnRyb2wocGFnZUFjY2Vzc1ZhbHVlLnBhZ2VBY2Nlc3NOb25lIHx8IGZhbHNlKSxcclxuICAgICAgICAgICAgdmFsaWRpdHk6IG5ldyBGb3JtQ29udHJvbCgocGFnZUFjY2Vzc1ZhbHVlPy52YWxpZGl0eSAmJiBTdHJpbmcocGFnZUFjY2Vzc1ZhbHVlPy52YWxpZGl0eSkpIHx8ICcwJyksXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbjogbmV3IEZvcm1Db250cm9sKChwYWdlQWNjZXNzVmFsdWU/LmNvbmRpdGlvbiAmJiBwYWdlQWNjZXNzVmFsdWU/LmNvbmRpdGlvbikgfHwgJ2Fsd2F5cycpLFxyXG4gICAgICAgICAgICBmYWxsYmFja1RvOiBuZXcgRm9ybUNvbnRyb2woKHBhZ2VBY2Nlc3NWYWx1ZT8uY29uZGl0aW9uICYmIHBhZ2VBY2Nlc3NWYWx1ZT8uZmFsbGJhY2tUbykgfHwgJ24nKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjZXNzQXJyYXk7XHJcbiAgfVxyXG5cclxuICBnZXRQYWdlUmVhZEFjY2VzcyhwYWdlQWNjZXNzVmFsdWUpIHtcclxuICAgIGlmIChwYWdlQWNjZXNzVmFsdWU/LnBhZ2VBY2Nlc3NDcmVhdGUgfHwgcGFnZUFjY2Vzc1ZhbHVlPy5wYWdlQWNjZXNzVXBkYXRlIHx8IHBhZ2VBY2Nlc3NWYWx1ZT8ucGFnZUFjY2Vzc0RlbGV0ZSkge1xyXG4gICAgICByZXR1cm4geyB2YWx1ZTogdHJ1ZSwgZGlzYWJsZWQ6IHRydWUgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gcGFnZUFjY2Vzc1ZhbHVlIHx8IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZVJlYWRGb3JtQWNjZXNzKHBhZ2VBY2Nlc3MpIHtcclxuICAgIGlmIChwYWdlQWNjZXNzPy5jIHx8IHBhZ2VBY2Nlc3M/LnUgfHwgcGFnZUFjY2Vzcz8uZCkge1xyXG4gICAgICByZXR1cm4geyB2YWx1ZTogdHJ1ZSwgZGlzYWJsZWQ6IHRydWUgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gcGFnZUFjY2Vzcy5yIHx8IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRSZWFkQWNjZXNzKGZpZWxkQWNjZXNzVmFsdWUpIHtcclxuICAgIGlmICghZmllbGRBY2Nlc3NWYWx1ZT8uYyB8fCAhZmllbGRBY2Nlc3NWYWx1ZT8udSB8fCAhZmllbGRBY2Nlc3NWYWx1ZT8ucikge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmllbGRBY2Nlc3NWYWx1ZS5yIHx8IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UmVhZEZvcm1BY2Nlc3MocGFnZUFjY2Vzcykge1xyXG4gICAgaWYgKHBhZ2VBY2Nlc3M/LmMgfHwgcGFnZUFjY2Vzcz8udSB8fCBwYWdlQWNjZXNzPy5kKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbHVlOiB0cnVlLCBkaXNhYmxlZDogdHJ1ZSB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBwYWdlQWNjZXNzLnIgfHwgZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0ZpZWxkTGV2ZWxFeGlzdChmaWVsZExldmVsRXhpc3QsIHNhdmVkUGFnZUFjY2Vzc1BhdGNoaW5nLCBwYWdlc0Zyb21GaWVsZCwgZXhpc3RpbmdWYWx1ZSwgaSkge1xyXG4gICAgbGV0IHBhZ2VBY2Nlc3NWYWx1ZTogYW55O1xyXG4gICAgaWYgKGZpZWxkTGV2ZWxFeGlzdD8ubGVuZ3RoICYmIHNhdmVkUGFnZUFjY2Vzc1BhdGNoaW5nKSB7XHJcbiAgICAgIHBhZ2VBY2Nlc3NWYWx1ZSA9IHRoaXMuZ2V0TW9zdEZyZXF1ZW50RWxlKFxyXG4gICAgICAgIGZpZWxkTGV2ZWxFeGlzdD8uZmlsdGVyKGVsZSA9PiAoZWxlLnBhZ2VJZCA9IHBhZ2VzRnJvbUZpZWxkW2ldKSk/Lm1hcChlID0+IChlLmFjY2VzcyA/IE51bWJlcihlLmFjY2VzcykgOiAwKSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhZ2VBY2Nlc3NWYWx1ZSA9IGV4aXN0aW5nVmFsdWU/LmZpbmQoZWxlID0+IGVsZS5wYWdlaWQgPT09IHBhZ2VzRnJvbUZpZWxkW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYWdlQWNjZXNzVmFsdWU7XHJcbiAgfVxyXG4gIC8vIFRoaXMgZnVuY3Rpb24gZm9yIGZpZWxkIGxldmVsIGFjY2Vzc1xyXG4gIGdldEFjY2VzcyhhY2Nlc3MsIGZpZWxkUGFnZUxldmVsKSB7XHJcbiAgICBsZXQgYWNjZXNzRmllbGQ6IGFueTtcclxuICAgIGlmIChmaWVsZFBhZ2VMZXZlbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGFjY2Vzc0ZpZWxkID0ge1xyXG4gICAgICAgICdjJzogYWNjZXNzPy5jLFxyXG4gICAgICAgICdyJzogdGhpcy5nZXRGaWVsZFJlYWRBY2Nlc3MoYWNjZXNzKSxcclxuICAgICAgICAndSc6IGFjY2Vzcz8udSxcclxuICAgICAgICAnaGlkZSc6IGFjY2Vzcz8uaGlkZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgYWNjZXNzRmllbGQgPSB7XHJcbiAgICAgICAgJ3InOiAoIWFjY2Vzcz8uaGlkZSAmJiAhYWNjZXNzPy5yKSA/IHRydWUgOiBhY2Nlc3MucixcclxuICAgICAgICAnaGlkZSc6IGFjY2Vzcz8uaGlkZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFjY2Vzc0ZpZWxkO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3JnYW5pemF0aW9uUGFnZShvcmdJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoQWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Pcmdhbml6YXRpb24uZ2V0T3JnYW5pemF0aW9uLnJlcGxhY2UoJ3tvcmdJZH0nLCBvcmdJZCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXNzZXRCeVBhZ2VJZChwSWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke0FjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuQXNzZXQuZ2V0UGFnZUFzc2V0fS8ke3BJZH1gKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFzc2V0KHNlbGVjdGVkQWNjZXNzOiBhbnksIHNlbGVjdGVkSWQ6IGFueSwgYXNzZXQ6IGFueSkge1xyXG4gICAgbGV0IHVybDogYW55O1xyXG4gICAgaWYgKHNlbGVjdGVkQWNjZXNzID09PSAndXNlcicpIHtcclxuICAgICAgdXJsID0gYG9yZy91c2VyLyR7c2VsZWN0ZWRJZH1gO1xyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3JvbGUnKSB7XHJcbiAgICAgIHVybCA9IGBhY2Nlc3MtY29udHJvbC9yb2xlLyR7c2VsZWN0ZWRJZH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gYHBsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5Z3JvdXAvJHtzZWxlY3RlZElkfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KGAvJHt1cmx9LyR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Bc3NldC5nZXRBc3NldH1gLCBhc3NldCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBc3NldE9uRGVzZWxlY3Qoc2VsZWN0ZWRBY2Nlc3M6IGFueSwgc2VsZWN0ZWRJZDogYW55LCBhc3NldDogYW55KSB7XHJcbiAgICBsZXQgdXJsOiBhbnk7XHJcbiAgICBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICd1c2VyJykge1xyXG4gICAgICB1cmwgPSBgb3JnL3VzZXIvJHtzZWxlY3RlZElkfWA7XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWNjZXNzID09PSAncm9sZScpIHtcclxuICAgICAgdXJsID0gYGFjY2Vzcy1jb250cm9sL3JvbGUvJHtzZWxlY3RlZElkfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cmwgPSBgcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lncm91cC8ke3NlbGVjdGVkSWR9YDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBhdGNoKGAvJHt1cmx9LyR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Bc3NldC5nZXRBc3NldERlc2VsZWN0fWAsIGFzc2V0KTtcclxuICB9XHJcblxyXG4gIGdldEFzc2V0QnlJZChzZWxlY3RlZEFjY2Vzczogc3RyaW5nLCBzZWxlY3RlZElkOiBhbnkpIHtcclxuICAgIGxldCB1cmw6IGFueTtcclxuICAgIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3VzZXInKSB7XHJcbiAgICAgIHVybCA9IEFjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuQXNzZXQuZ2V0VXNlckFzc2V0O1xyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3JvbGUnKSB7XHJcbiAgICAgIHVybCA9IEFjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuQXNzZXQuZ2V0Um9sZUFzc2V0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gQWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Bc3NldC5nZXRQb2xpY3lHcm91cEFzc2V0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke3VybH0vJHtzZWxlY3RlZElkfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9saWN5R3JvdXBQYWdlKHBvbGljeWdyb3VwaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAvcG9saWN5Z3JvdXAvJHtwb2xpY3lncm91cGlkfSR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5QYWdlLmdldFBhZ2V9YCk7XHJcbiAgfVxyXG5cclxuICBnZXREeW5hbWljUGFnZShzZWxlY3RlZEFjY2VzczogYW55LCBzZWxlY3RlZElkOiBhbnkpIHtcclxuICAgIGxldCB1cmw6IGFueTtcclxuICAgIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3VzZXInKSB7XHJcbiAgICAgIHVybCA9ICdvcmcvdXNlcic7XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWNjZXNzID09PSAncm9sZScpIHtcclxuICAgICAgdXJsID0gJ2FjY2Vzcy1jb250cm9sL3JvbGUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gJ3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5Z3JvdXAnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAvJHt1cmx9LyR7c2VsZWN0ZWRJZH0ke0FjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRQYWdlfWApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRHluYW1pY1BhZ2Uoc2VsZWN0ZWRBY2Nlc3M6IGFueSwgc2VsZWN0ZWRJZDogYW55LCBwYWdlRGF0YTogYW55KSB7XHJcbiAgICBsZXQgdXJsOiBhbnk7XHJcbiAgICBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICd1c2VyJykge1xyXG4gICAgICB1cmwgPSAnb3JnL3VzZXInO1xyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3JvbGUnKSB7XHJcbiAgICAgIHVybCA9ICdhY2Nlc3MtY29udHJvbC9yb2xlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9ICdwbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeWdyb3VwJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnB1dChgLyR7dXJsfS8ke3NlbGVjdGVkSWR9JHtBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LlBhZ2UuZ2V0UGFnZX1gLCBwYWdlRGF0YSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVBY2Nlc3MoZmllbGRMZXZlbEFjY2VzczogYm9vbGVhbiwgYWNjZXNzQnk6IHN0cmluZywgcGF5bG9hZDogYW55LCB1c2VySWQ6IGFueSwgcm9sZUlkOiBhbnksIHBvbGljeUlkOiBhbnkpIHtcclxuICAgIGxldCB1cmw6IGFueTtcclxuICAgIGNvbnN0IGNyZWF0ZVVybCA9IGZpZWxkTGV2ZWxBY2Nlc3NcclxuICAgICAgPyBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LkFzc2V0LmdldEFzc2V0XHJcbiAgICAgIDogQWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5QYWdlLmdldFBhZ2U7XHJcbiAgICAvLyBjaGVjayBvbmx5IHBvbGljeSBncm91cFxyXG4gICAgaWYgKGFjY2Vzc0J5ID09PSAnMycpIHtcclxuICAgICAgdXJsID0gYCR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Qb2xpY3lHcm91cC5nZXRQb2xpY3lHcm91cH0ke3BvbGljeUlkID8gcG9saWN5SWQgOiAnMCd9JHtjcmVhdGVVcmx9YDtcclxuICAgIH1cclxuICAgIC8vIGNoZWNrIHBlcnNvbmEgd2l0aCBwb2xpY3kgZ3JvdXBcclxuICAgIGlmIChhY2Nlc3NCeSA9PT0gJzInKSB7XHJcbiAgICAgIHVybCA9IGAke0FjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuUm9sZS5nZXRSb2xlfSR7cm9sZUlkID8gcm9sZUlkIDogJzAnfSR7Y3JlYXRlVXJsfWA7XHJcbiAgICB9XHJcbiAgICAvLyBjaGVjayB1c2VyLCBwZXJzb25hIHdpdGggcG9saWN5IGdyb3VwXHJcbiAgICBpZiAoYWNjZXNzQnkgPT09ICcxJykge1xyXG4gICAgICB1cmwgPSBgJHtBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0VXNlcn0ke3VzZXJJZCA/IHVzZXJJZCA6ICcwJ30ke2NyZWF0ZVVybH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdCh1cmwsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXBwbGljYXRpb25BY2Nlc3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoJy9hcHBsaWNhdGlvbmFjY2Vzcy8nKTtcclxuICB9XHJcblxyXG4gIGNoZWNrT2JqZWN0VHlwZShzY2hlbWE6IHN0cmluZywgdGFibGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke0RhdGFCYXNlQ29uZmlnLkVuZFBvaW50LkRhdGFiYXNlLmNoZWNrT2JqZWN0VHlwZX0vJHtzY2hlbWF9LyR7dGFibGV9YClcclxuICB9XHJcbn1cclxuIl19